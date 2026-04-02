import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  ChevronLeft, 
  RotateCcw, 
  CheckCircle2, 
  BarChart3, 
  Sparkles,
  User,
  ShieldCheck,
  Copy,
  LayoutGrid,
  Activity,
  Target
} from 'lucide-react';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  ResponsiveContainer 
} from 'recharts';

import { questions, mbtiTypes } from './data';
import { Dimension, TestResult } from './types';

// --- UI Components ---

const Annotation = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <span className={`font-mono text-[10px] uppercase tracking-[0.2em] opacity-40 ${className}`}>
    {children}
  </span>
);

const FocusCard = ({ children, className = "", isActive = false }: { children: React.ReactNode, className?: string, isActive?: boolean }) => (
  <div className={`
    relative overflow-hidden rounded-3xl transition-all duration-700
    ${isActive 
      ? 'bg-white shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] ring-1 ring-black/5 scale-[1.01]' 
      : 'bg-white/40 border border-black/5 opacity-60 scale-100'}
    ${className}
  `}>
    {children}
  </div>
);

const App: React.FC = () => {
  const [step, setStep] = useState<'welcome' | 'test' | 'calculating' | 'result'>('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, Dimension>>({});
  const [copySuccess, setCopySuccess] = useState(false);

  const progress = (Object.keys(answers).length / questions.length) * 100;

  const handleAnswer = (questionId: number, dimension: Dimension) => {
    setAnswers(prev => ({ ...prev, [questionId]: dimension }));
    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }, 300);
    } else {
      setStep('calculating');
      setTimeout(() => {
        setStep('result');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 2500);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateResult = (): TestResult => {
    const scores: Record<Dimension, number> = {
      E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0
    };

    (Object.values(answers) as Dimension[]).forEach(dim => {
      scores[dim]++;
    });

    const type = [
      scores.E >= scores.I ? 'E' : 'I',
      scores.S >= scores.N ? 'S' : 'N',
      scores.T >= scores.F ? 'T' : 'F',
      scores.J >= scores.P ? 'J' : 'P'
    ].join('');

    const calculateStrength = (a: Dimension, b: Dimension) => {
      const total = scores[a] + scores[b];
      if (total === 0) return 50;
      return Math.round((scores[a] / total) * 100);
    };

    const strengths = {
      'E_I': calculateStrength('E', 'I'),
      'S_N': calculateStrength('S', 'N'),
      'T_F': calculateStrength('T', 'F'),
      'J_P': calculateStrength('J', 'P'),
    };

    return { type, scores, strengths };
  };

  const result = useMemo(() => (step === 'result' ? calculateResult() : null), [step, answers]);
  const mbtiInfo = useMemo(() => (result ? mbtiTypes.find(t => t.id === result.type) : null), [result]);

  const resetTest = () => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setStep('welcome');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyToClipboard = () => {
    if (!mbtiInfo) return;
    const text = `My MBTI Result: ${mbtiInfo.id} - ${mbtiInfo.name}\n${mbtiInfo.description}`;
    navigator.clipboard.writeText(text);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-black font-sans selection:bg-black selection:text-white overflow-x-hidden">
      {/* Background Decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-indigo-50 rounded-full blur-[160px] opacity-60" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-50 rounded-full blur-[140px] opacity-40" />
      </div>

      {/* Header Metadata */}
      <header className="fixed top-0 left-0 right-0 h-20 bg-white/40 backdrop-blur-2xl border-b border-black/[0.03] z-50 flex items-center justify-between px-8 lg:px-16">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-black rounded-2xl flex items-center justify-center shadow-2xl">
            <Activity className="text-white w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tighter text-lg">MBTI_CORE</span>
            <Annotation>Assessment Engine v2.4</Annotation>
          </div>
        </div>
        
        {step === 'test' && (
          <div className="flex items-center gap-8">
            <div className="hidden md:flex flex-col items-end">
              <Annotation>Current_Progress</Annotation>
              <span className="font-mono text-xs font-bold">{Math.round(progress)}% Complete</span>
            </div>
            <div className="w-32 h-1 bg-black/5 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-black" 
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ type: "spring", stiffness: 40 }}
              />
            </div>
          </div>
        )}
      </header>

      <main className="relative pt-40 pb-32 px-8 max-w-6xl mx-auto z-10">
        <AnimatePresence mode="wait">
          {step === 'welcome' && (
            <motion.div 
              key="welcome"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              className="space-y-24"
            >
              <div className="space-y-10 text-center lg:text-left">
                <div className="space-y-4">
                  <Annotation className="block">// INITIALIZING_PROTOCOL</Annotation>
                  <motion.h1 
                    className="text-7xl lg:text-[10rem] font-black tracking-tighter leading-[0.8] text-black"
                  >
                    UNMASK YOUR<br />
                    <span className="text-indigo-600">POTENTIAL.</span>
                  </motion.h1>
                </div>
                <p className="text-2xl text-gray-400 max-w-2xl leading-relaxed font-light">
                  A high-resolution 93-item assessment mapping the architecture of your personality. 
                  Discover how you perceive the world and make decisions.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <FocusCard isActive={true} className="lg:col-span-2 p-12 bg-indigo-50/30 border-indigo-100/50 space-y-10">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-indigo-600" />
                    <Annotation className="text-indigo-600 font-bold">Assessment Guidelines</Annotation>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">Intuitive Response</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        There are no right or wrong answers. Respond based on your natural inclination, not how you think you should be.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">Focus Mode</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        Find a quiet space. The test takes approximately 10-15 minutes. Avoid overthinking each item.
                      </p>
                    </div>
                  </div>
                </FocusCard>

                <div className="space-y-8 flex flex-col justify-center p-12 bg-black text-white rounded-[3rem] shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                  <div className="space-y-2">
                    <Annotation className="text-white/40">Ready_To_Start</Annotation>
                    <h3 className="text-3xl font-bold tracking-tight">Begin Test</h3>
                  </div>
                  <button 
                    onClick={() => setStep('test')}
                    className="w-full py-6 bg-white text-black rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-indigo-50 transition-all active:scale-95"
                  >
                    Start Assessment <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {step === 'test' && (
            <motion.div 
              key="test"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              className="max-w-4xl mx-auto space-y-16"
            >
              <div className="flex justify-between items-end border-b border-black/[0.05] pb-8">
                <div className="space-y-2">
                  <Annotation className="text-indigo-600 font-bold">// ACTIVE_ITEM</Annotation>
                  <h2 className="text-4xl font-bold tracking-tighter">
                    QUESTION {String(currentQuestionIndex + 1).padStart(2, '0')}
                  </h2>
                </div>
                <div className="text-right">
                  <Annotation>Category</Annotation>
                  <p className="font-mono text-xs font-bold uppercase tracking-widest">General Assessment</p>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuestionIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                >
                  <FocusCard isActive={true} className="p-16 space-y-16">
                    <h3 className="text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight text-gray-900">
                      {currentQuestionIndex >= 26 && currentQuestionIndex < 73 
                        ? "Which word appeals to you more?" 
                        : questions[currentQuestionIndex].text}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {(['A', 'B'] as const).map((opt) => (
                        <motion.button
                          key={opt}
                          whileHover={{ scale: 1.02, y: -4 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleAnswer(questions[currentQuestionIndex].id, questions[currentQuestionIndex].options[opt].dimension)}
                          className={`
                            group relative p-10 text-left rounded-2xl border-2 transition-all duration-500
                            ${answers[questions[currentQuestionIndex].id] === questions[currentQuestionIndex].options[opt].dimension
                              ? 'bg-black border-black text-white shadow-2xl'
                              : 'bg-white border-gray-100 hover:border-indigo-200 hover:bg-indigo-50/30'}
                          `}
                        >
                          <div className="flex justify-between items-start mb-6">
                            <Annotation className={answers[currentQuestionIndex] === questions[currentQuestionIndex].options[opt].dimension ? 'text-white/40' : ''}>
                              Option_{opt}
                            </Annotation>
                            {answers[questions[currentQuestionIndex].id] === questions[currentQuestionIndex].options[opt].dimension && (
                              <CheckCircle2 className="w-6 h-6 text-indigo-400" />
                            )}
                          </div>
                          <p className="text-2xl font-medium leading-tight">
                            {questions[currentQuestionIndex].options[opt].text}
                          </p>
                        </motion.button>
                      ))}
                    </div>
                  </FocusCard>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-between pt-12">
                <button 
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                  className="flex items-center gap-3 text-gray-400 font-bold uppercase tracking-widest text-xs hover:text-black disabled:opacity-10 transition-all"
                >
                  <ChevronLeft className="w-5 h-5" /> Previous_Item
                </button>
                
                <div className="flex gap-3">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-700 ${i === 0 ? 'bg-black w-6' : 'bg-gray-200'}`} 
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {step === 'calculating' && (
            <motion.div
              key="calculating"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-md mx-auto py-40 text-center space-y-16"
            >
              <div className="relative inline-block">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="w-40 h-40 border-[1px] border-dashed border-indigo-200 rounded-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-indigo-600 animate-pulse" />
                </div>
              </div>
              <div className="space-y-4">
                <Annotation className="block animate-pulse">// SYNTHESIZING_PSYCHOLOGICAL_DATA</Annotation>
                <h2 className="text-4xl font-bold tracking-tighter">Mapping Personality Architecture</h2>
                <p className="text-gray-400 font-mono text-[10px] uppercase tracking-[0.3em]">Processing dimensions... 100%</p>
              </div>
            </motion.div>
          )}

          {step === 'result' && result && mbtiInfo && (
            <motion.div 
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-24"
            >
              <div className="text-center space-y-10">
                <Annotation className="block">// ASSESSMENT_COMPLETE</Annotation>
                <div className="space-y-2">
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[12rem] lg:text-[18rem] font-black tracking-tighter text-black leading-none"
                  >
                    {result.type}
                  </motion.h1>
                  <motion.h2 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-4xl lg:text-6xl font-medium text-indigo-600 uppercase tracking-[0.3em]"
                  >
                    {mbtiInfo.name}
                  </motion.h2>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                <div className="lg:col-span-7 space-y-12">
                  <FocusCard isActive={true} className="p-16 space-y-12">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-black rounded-2xl text-white">
                        <User className="w-6 h-6" />
                      </div>
                      <Annotation className="text-black font-bold">Archetype Profile</Annotation>
                    </div>
                    
                    <p className="text-3xl leading-snug text-gray-800 font-light italic border-l-8 border-indigo-50 pl-10">
                      "{mbtiInfo.description}"
                    </p>

                    <div className="space-y-6">
                      <Annotation>Core_Attributes</Annotation>
                      <div className="flex flex-wrap gap-4">
                        {mbtiInfo.characteristics.map((c, i) => (
                          <motion.span 
                            key={c} 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 + i * 0.1 }}
                            className="px-6 py-3 bg-gray-50 rounded-2xl text-sm font-bold text-gray-600 border border-gray-100"
                          >
                            # {c}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </FocusCard>

                  <div className="grid grid-cols-2 gap-6">
                    <button 
                      onClick={copyToClipboard}
                      className="flex items-center justify-center gap-3 p-6 bg-white border-2 border-black rounded-3xl font-bold hover:bg-gray-50 transition-all"
                    >
                      {copySuccess ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                      {copySuccess ? 'Copied' : 'Copy_Result'}
                    </button>
                    <button 
                      onClick={resetTest}
                      className="flex items-center justify-center gap-3 p-6 bg-black text-white rounded-3xl font-bold hover:bg-gray-900 transition-all shadow-2xl"
                    >
                      <RotateCcw className="w-5 h-5" /> Retake_Test
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-12">
                  <FocusCard isActive={false} className="p-10 bg-gray-50/50">
                    <Annotation className="block mb-10">Dimensional_Mapping</Annotation>
                    <div className="h-[350px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={[
                          { subject: 'E', A: result.strengths.E_I, fullMark: 100 },
                          { subject: 'S', A: result.strengths.S_N, fullMark: 100 },
                          { subject: 'T', A: result.strengths.T_F, fullMark: 100 },
                          { subject: 'J', A: result.strengths.J_P, fullMark: 100 },
                          { subject: 'I', A: 100 - result.strengths.E_I, fullMark: 100 },
                          { subject: 'N', A: 100 - result.strengths.S_N, fullMark: 100 },
                          { subject: 'F', A: 100 - result.strengths.T_F, fullMark: 100 },
                          { subject: 'P', A: 100 - result.strengths.J_P, fullMark: 100 },
                        ]}>
                          <PolarGrid stroke="#E5E7EB" />
                          <PolarAngleAxis dataKey="subject" tick={{ fill: '#9CA3AF', fontSize: 12, fontWeight: 700 }} />
                          <Radar name="Score" dataKey="A" stroke="#4F46E5" strokeWidth={2} fill="#4F46E5" fillOpacity={0.15} />
                        </RadarChart>
                      </ResponsiveContainer>
                    </div>
                  </FocusCard>

                  <div className="space-y-10">
                    <Annotation>Preference_Intensity</Annotation>
                    {[
                      { label: 'Energy', val: result.strengths.E_I, left: 'Extraversion', right: 'Introversion' },
                      { label: 'Perception', val: result.strengths.S_N, left: 'Sensing', right: 'Intuition' },
                      { label: 'Decision', val: result.strengths.T_F, left: 'Thinking', right: 'Feeling' },
                      { label: 'Lifestyle', val: result.strengths.J_P, left: 'Judging', right: 'Perceiving' },
                    ].map((s, i) => (
                      <div key={s.label} className="space-y-4">
                        <div className="flex justify-between text-[10px] font-mono font-bold uppercase tracking-widest">
                          <span className={s.val >= 50 ? 'text-indigo-600' : 'opacity-30'}>{s.left}</span>
                          <span className={s.val < 50 ? 'text-indigo-600' : 'opacity-30'}>{s.right}</span>
                        </div>
                        <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div 
                            className="absolute top-0 bottom-0 bg-indigo-600"
                            initial={{ width: 0, left: '50%' }}
                            animate={{ 
                              width: `${Math.abs(s.val - 50) * 2}%`,
                              left: s.val > 50 ? '50%' : `${50 - Math.abs(s.val - 50) * 2}%`
                            }}
                            transition={{ duration: 1.5, ease: "circOut", delay: 1 + i * 0.1 }}
                          />
                          <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-black/10" />
                        </div>
                        <div className="text-center text-[8px] font-mono opacity-30 uppercase tracking-[0.4em]">
                          {s.label}_Axis
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="relative py-24 px-8 border-t border-black/[0.03] bg-white z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center border border-black/[0.03]">
              <Target className="w-6 h-6 text-gray-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-black font-bold tracking-tighter text-lg">MBTI_INSIGHTS</span>
              <Annotation>Professional Personality Mapping</Annotation>
            </div>
          </div>
          <div className="flex gap-12">
            <Annotation className="hover:text-black transition-colors cursor-pointer">Theory</Annotation>
            <Annotation className="hover:text-black transition-colors cursor-pointer">Privacy</Annotation>
            <Annotation className="hover:text-black transition-colors cursor-pointer">Contact</Annotation>
          </div>
          <p className="font-mono text-[10px] opacity-20 uppercase tracking-[0.5em]">© 2026 CORE_SYSTEMS</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
