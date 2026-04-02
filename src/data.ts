import { Question, MBTIType } from './types';

export const questions: Question[] = [
  { id: 1, text: "When you go somewhere for the day, would you rather?", options: { A: { text: "Plan what you will do and when", dimension: "J" }, B: { text: "Just go!", dimension: "P" } } },
  { id: 2, text: "If you were a teacher, would you rather teach?", options: { A: { text: "Fact courses", dimension: "S" }, B: { text: "Courses involving theory", dimension: "N" } } },
  { id: 3, text: "Are you usually?", options: { A: { text: "A 'good mixer' with groups of people", dimension: "E" }, B: { text: "Rather quiet and reserved", dimension: "I" } } },
  { id: 4, text: "Do you prefer to?", options: { A: { text: "Arrange dates, parties, etc., well in advance", dimension: "J" }, B: { text: "Be free to do whatever looks like fun when the time comes", dimension: "P" } } },
  { id: 5, text: "Do you usually get along better with?", options: { A: { text: "Realistic people", dimension: "S" }, B: { text: "Imaginative people", dimension: "N" } } },
  { id: 6, text: "When you are with a group of people, would you usually rather?", options: { A: { text: "Join in the talk of the group", dimension: "E" }, B: { text: "Talk with one person at a time", dimension: "I" } } },
  { id: 7, text: "Do you more often let?", options: { A: { text: "Your heart rule your head", dimension: "F" }, B: { text: "Your head rule your heart", dimension: "T" } } },
  { id: 8, text: "Do you prefer to do many things?", options: { A: { text: "On a schedule", dimension: "J" }, B: { text: "When you feel like it", dimension: "P" } } },
  { id: 9, text: "Would you rather be considered?", options: { A: { text: "A practical person", dimension: "S" }, B: { text: "An ingenious person", dimension: "N" } } },
  { id: 10, text: "In a large group, do you more often?", options: { A: { text: "Introduce others", dimension: "E" }, B: { text: "Get introduced", dimension: "I" } } },
  { id: 11, text: "Does following a schedule?", options: { A: { text: "Appeal to you", dimension: "J" }, B: { text: "Cramp you", dimension: "P" } } },
  { id: 12, text: "Do you prefer?", options: { A: { text: "People who are practical and have a lot of common sense", dimension: "S" }, B: { text: "People who are quick-witted", dimension: "N" } } },
  { id: 13, text: "Does it take usually?", options: { A: { text: "A little time for others to get to know you", dimension: "E" }, B: { text: "A long time for others to get to know you", dimension: "I" } } },
  { id: 14, text: "Is it higher praise to be called?", options: { A: { text: "A person of real feeling", dimension: "F" }, B: { text: "A consistently reasonable person", dimension: "T" } } },
  { id: 15, text: "In making plans for your weekend, do you feel?", options: { A: { text: "It's necessary", dimension: "J" }, B: { text: "It's not necessary", dimension: "P" } } },
  { id: 16, text: "Would you rather have as a friend?", options: { A: { text: "Someone who is always coming up with new ideas", dimension: "N" }, B: { text: "Someone who has both feet on the ground", dimension: "S" } } },
  { id: 17, text: "Most of the time, do you prefer to?", options: { A: { text: "Be with others", dimension: "E" }, B: { text: "Be alone", dimension: "I" } } },
  { id: 18, text: "In your daily work, do you?", options: { A: { text: "Usually plan your work so you won't need to work under pressure", dimension: "J" }, B: { text: "Rather enjoy an emergency that makes you work against time", dimension: "P" } } },
  { id: 19, text: "When you read for pleasure, do you?", options: { A: { text: "Enjoy odd or original ways of saying things", dimension: "N" }, B: { text: "Like writers to say exactly what they mean", dimension: "S" } } },
  { id: 20, text: "Can you?", options: { A: { text: "Talk easily to almost anyone for as long as you have to", dimension: "E" }, B: { text: "Find a lot to say only to certain people or under certain conditions", dimension: "I" } } },
  { id: 21, text: "Do you more often act on?", options: { A: { text: "Sentiment", dimension: "F" }, B: { text: "Logic", dimension: "T" } } },
  { id: 22, text: "When you have a special job to do, do you?", options: { A: { text: "Organize it carefully before you start", dimension: "J" }, B: { text: "Find out what is necessary as you go along", dimension: "P" } } },
  { id: 23, text: "In doing something that many other people do, does it appeal to you more to?", options: { A: { text: "Do it in the accepted way", dimension: "S" }, B: { text: "Invent a way of your own", dimension: "N" } } },
  { id: 24, text: "Can new acquaintances tell what you are interested in?", options: { A: { text: "Right away", dimension: "E" }, B: { text: "Only after they really get to know you", dimension: "I" } } },
  { id: 25, text: "In planning a trip, would you rather?", options: { A: { text: "Know ahead of time what you will be doing most of the days", dimension: "J" }, B: { text: "Be free to do whatever you feel like most of the time", dimension: "P" } } },
  { id: 26, text: "Do most people think you are?", options: { A: { text: "Very frank", dimension: "E" }, B: { text: "Rather quiet", dimension: "I" } } },
  { id: 27, text: "Which word appeals to you more?", options: { A: { text: "Facts", dimension: "S" }, B: { text: "Ideas", dimension: "N" } } },
  { id: 28, text: "Which word appeals to you more?", options: { A: { text: "Hearty", dimension: "F" }, B: { text: "Determined", dimension: "T" } } },
  { id: 29, text: "Which word appeals to you more?", options: { A: { text: "Practical", dimension: "S" }, B: { text: "Innovative", dimension: "N" } } },
  { id: 30, text: "Which word appeals to you more?", options: { A: { text: "Scheduled", dimension: "J" }, B: { text: "Unplanned", dimension: "P" } } },
  { id: 31, text: "Which word appeals to you more?", options: { A: { text: "Concrete", dimension: "S" }, B: { text: "Abstract", dimension: "N" } } },
  { id: 32, text: "Which word appeals to you more?", options: { A: { text: "Feeling", dimension: "F" }, B: { text: "Thinking", dimension: "T" } } },
  { id: 33, text: "Which word appeals to you more?", options: { A: { text: "Known", dimension: "S" }, B: { text: "Novel", dimension: "N" } } },
  { id: 34, text: "Which word appeals to you more?", options: { A: { text: "Sentiment", dimension: "F" }, B: { text: "Reason", dimension: "T" } } },
  { id: 35, text: "Which word appeals to you more?", options: { A: { text: "Systematic", dimension: "J" }, B: { text: "Spontaneous", dimension: "P" } } },
  { id: 36, text: "Which word appeals to you more?", options: { A: { text: "Warm", dimension: "E" }, B: { text: "Quiet", dimension: "I" } } },
  { id: 37, text: "Which word appeals to you more?", options: { A: { text: "Gentle", dimension: "F" }, B: { text: "Firm", dimension: "T" } } },
  { id: 38, text: "Which word appeals to you more?", options: { A: { text: "Statement", dimension: "S" }, B: { text: "Concept", dimension: "N" } } },
  { id: 39, text: "Which word appeals to you more?", options: { A: { text: "Compassionate", dimension: "F" }, B: { text: "Strong-willed", dimension: "T" } } },
  { id: 40, text: "Which word appeals to you more?", options: { A: { text: "Factual", dimension: "S" }, B: { text: "Theoretical", dimension: "N" } } },
  { id: 41, text: "Which word appeals to you more?", options: { A: { text: "Many friends", dimension: "E" }, B: { text: "Few friends", dimension: "I" } } },
  { id: 42, text: "Which word appeals to you more?", options: { A: { text: "Orderly", dimension: "J" }, B: { text: "Casual", dimension: "P" } } },
  { id: 43, text: "Which word appeals to you more?", options: { A: { text: "Certainty", dimension: "S" }, B: { text: "Speculation", dimension: "N" } } },
  { id: 44, text: "Which word appeals to you more?", options: { A: { text: "Lenient", dimension: "F" }, B: { text: "Strict", dimension: "T" } } },
  { id: 45, text: "Which word appeals to you more?", options: { A: { text: "Necessity", dimension: "S" }, B: { text: "Possibility", dimension: "N" } } },
  { id: 46, text: "Which word appeals to you more?", options: { A: { text: "Emotional", dimension: "F" }, B: { text: "Logical", dimension: "T" } } },
  { id: 47, text: "Which word appeals to you more?", options: { A: { text: "Talkative", dimension: "E" }, B: { text: "Reserved", dimension: "I" } } },
  { id: 48, text: "Which word appeals to you more?", options: { A: { text: "Gentle", dimension: "F" }, B: { text: "Power", dimension: "T" } } },
  { id: 49, text: "Which word appeals to you more?", options: { A: { text: "Reality", dimension: "S" }, B: { text: "Ideal", dimension: "N" } } },
  { id: 50, text: "Which word appeals to you more?", options: { A: { text: "Kind", dimension: "F" }, B: { text: "Competent", dimension: "T" } } },
  { id: 51, text: "Which word appeals to you more?", options: { A: { text: "Fact", dimension: "S" }, B: { text: "Theory", dimension: "N" } } },
  { id: 52, text: "Which word appeals to you more?", options: { A: { text: "System", dimension: "J" }, B: { text: "Random", dimension: "P" } } },
  { id: 53, text: "Which word appeals to you more?", options: { A: { text: "Realistic", dimension: "S" }, B: { text: "Imaginative", dimension: "N" } } },
  { id: 54, text: "Which word appeals to you more?", options: { A: { text: "Emotional", dimension: "F" }, B: { text: "Objective", dimension: "T" } } },
  { id: 55, text: "Which word appeals to you more?", options: { A: { text: "Build", dimension: "S" }, B: { text: "Invent", dimension: "N" } } },
  { id: 56, text: "Which word appeals to you more?", options: { A: { text: "Affectionate", dimension: "F" }, B: { text: "Practical", dimension: "T" } } },
  { id: 57, text: "Which word appeals to you more?", options: { A: { text: "Orderly", dimension: "J" }, B: { text: "Carefree", dimension: "P" } } },
  { id: 58, text: "Which word appeals to you more?", options: { A: { text: "Outgoing", dimension: "E" }, B: { text: "Quiet", dimension: "I" } } },
  { id: 59, text: "Which word appeals to you more?", options: { A: { text: "Agreeable", dimension: "F" }, B: { text: "Analytical", dimension: "T" } } },
  { id: 60, text: "Which word appeals to you more?", options: { A: { text: "Factual", dimension: "S" }, B: { text: "Imaginative", dimension: "N" } } },
  { id: 61, text: "Which word appeals to you more?", options: { A: { text: "Blessing", dimension: "F" }, B: { text: "Benefit", dimension: "T" } } },
  { id: 62, text: "Which word appeals to you more?", options: { A: { text: "Detailed", dimension: "S" }, B: { text: "General", dimension: "N" } } },
  { id: 63, text: "Which word appeals to you more?", options: { A: { text: "Decisive", dimension: "J" }, B: { text: "Impulsive", dimension: "P" } } },
  { id: 64, text: "Which word appeals to you more?", options: { A: { text: "Make", dimension: "S" }, B: { text: "Create", dimension: "N" } } },
  { id: 65, text: "Which word appeals to you more?", options: { A: { text: "Enthusiastic", dimension: "E" }, B: { text: "Objective", dimension: "I" } } },
  { id: 66, text: "Which word appeals to you more?", options: { A: { text: "Practical", dimension: "S" }, B: { text: "Charming", dimension: "N" } } },
  { id: 67, text: "Which word appeals to you more?", options: { A: { text: "Considerate", dimension: "F" }, B: { text: "Just", dimension: "T" } } },
  { id: 68, text: "Which word appeals to you more?", options: { A: { text: "Sociable", dimension: "E" }, B: { text: "Quiet", dimension: "I" } } },
  { id: 69, text: "Which word appeals to you more?", options: { A: { text: "Sensitive", dimension: "F" }, B: { text: "Reasonable", dimension: "T" } } },
  { id: 70, text: "Which word appeals to you more?", options: { A: { text: "Manufacture", dimension: "S" }, B: { text: "Design", dimension: "N" } } },
  { id: 71, text: "Which word appeals to you more?", options: { A: { text: "Sympathetic", dimension: "F" }, B: { text: "Logical", dimension: "T" } } },
  { id: 72, text: "Which word appeals to you more?", options: { A: { text: "Public", dimension: "E" }, B: { text: "Private", dimension: "I" } } },
  { id: 73, text: "Which word appeals to you more?", options: { A: { text: "Compassion", dimension: "F" }, B: { text: "Foresight", dimension: "T" } } },
  { id: 74, text: "Do you usually prefer to?", options: { A: { text: "Arrange your social life well in advance", dimension: "J" }, B: { text: "Be free to do whatever looks like fun", dimension: "P" } } },
  { id: 75, text: "Do you find being around many people?", options: { A: { text: "Energizes you", dimension: "E" }, B: { text: "Leaves you feeling tired", dimension: "I" } } },
  { id: 76, text: "In most situations, do you prefer to?", options: { A: { text: "Follow a schedule", dimension: "J" }, B: { text: "Go with the flow", dimension: "P" } } },
  { id: 77, text: "At a party, do you?", options: { A: { text: "Always have a good time", dimension: "E" }, B: { text: "Sometimes get bored", dimension: "I" } } },
  { id: 78, text: "In making a decision, is it more important to you to?", options: { A: { text: "Consider people's feelings", dimension: "F" }, B: { text: "Weigh the facts", dimension: "T" } } },
  { id: 79, text: "Do you prefer to?", options: { A: { text: "Prepare well in advance", dimension: "J" }, B: { text: "Wait and see what happens", dimension: "P" } } },
  { id: 80, text: "Is it usually?", options: { A: { text: "Easy for others to get to know you", dimension: "E" }, B: { text: "Hard for others to get to know you", dimension: "I" } } },
  { id: 81, text: "Is your preferred way of doing things?", options: { A: { text: "Sticking to what has worked before", dimension: "S" }, B: { text: "Analyzing what is still wrong and challenging unsolved problems", dimension: "N" } } },
  { id: 82, text: "Do you consider yourself to be more of?", options: { A: { text: "An organized person", dimension: "J" }, B: { text: "A spontaneous person", dimension: "P" } } },
  { id: 83, text: "Can you?", options: { A: { text: "Talk easily to almost anyone for as long as you have to", dimension: "E" }, B: { text: "Talk easily only to people you know well or have common interests with", dimension: "I" } } },
  { id: 84, text: "Would you rather work for a boss who is?", options: { A: { text: "Good-natured but inconsistent", dimension: "F" }, B: { text: "Sharp-tongued but always fair", dimension: "T" } } },
  { id: 85, text: "Do you prefer to do most things according to?", options: { A: { text: "A set schedule", dimension: "J" }, B: { text: "The way you feel at the moment", dimension: "P" } } },
  { id: 86, text: "At a party, do you?", options: { A: { text: "Talk a lot", dimension: "E" }, B: { text: "Listen more", dimension: "I" } } },
  { id: 87, text: "Do you usually prefer to take courses that deal with?", options: { A: { text: "Concrete facts", dimension: "S" }, B: { text: "General concepts and principles", dimension: "N" } } },
  { id: 88, text: "When you start a big project that is due in a week, do you?", options: { A: { text: "Take time to list the things to be done and the order of doing them", dimension: "J" }, B: { text: "Just dive in", dimension: "P" } } },
  { id: 89, text: "In social situations, do you usually find it?", options: { A: { text: "Easy to talk to most people for a long time", dimension: "E" }, B: { text: "Hard to find things to talk about with some people", dimension: "I" } } },
  { id: 90, text: "Is it higher praise to be called?", options: { A: { text: "A person of real feeling", dimension: "F" }, B: { text: "A consistently reasonable person", dimension: "T" } } },
  { id: 91, text: "Do you find that following a schedule is?", options: { A: { text: "Helpful and appropriate most of the time", dimension: "J" }, B: { text: "Sometimes necessary but rather a nuisance", dimension: "P" } } },
  { id: 92, text: "Do you usually?", options: { A: { text: "Mix with everyone", dimension: "E" }, B: { text: "Tend to keep to yourself", dimension: "I" } } },
  { id: 93, text: "In general, to get a big task done, do you prefer to?", options: { A: { text: "Start by figuring out each step", dimension: "J" }, B: { text: "Just start and see what needs to be done as you go", dimension: "P" } } },
];

export const mbtiTypes: MBTIType[] = [
  {
    id: "ISTJ",
    name: "The Inspector",
    description: "Quiet, serious, earn success by thoroughness and dependability. Practical, matter-of-fact, realistic, and responsible. Decide logically what should be done and work toward it steadily, regardless of distractions. Take pleasure in making everything orderly and organized – their work, their home, their life. Value traditions and loyalty.",
    characteristics: ["Quiet & Serious", "Responsible", "Logical", "Values Tradition", "Organized"]
  },
  {
    id: "ISFJ",
    name: "The Protector",
    description: "Quiet, friendly, responsible, and conscientious. Committed and steady in meeting their obligations. Thorough, painstaking, and accurate. Loyal, considerate, notice and remember specifics about people who are important to them, concerned with how others feel. Strive to create an orderly and harmonious environment at work and at home.",
    characteristics: ["Friendly & Considerate", "Painstakingly Accurate", "Loyal", "Concerned for Others", "Harmonious"]
  },
  {
    id: "INFJ",
    name: "The Counselor",
    description: "Seek meaning and connection in ideas, relationships, and material possessions. Want to understand what motivates people and are insightful about others. Conscientious and committed to their firm values. Develop a clear vision about how best to serve the common good. Organized and decisive in implementing their vision.",
    characteristics: ["Insightful", "Value-Driven", "Conscientious", "Decisive", "Visionary"]
  },
  {
    id: "INTJ",
    name: "The Mastermind",
    description: "Have original minds and great drive for implementing their ideas and achieving their goals. Quickly see patterns in external events and develop long-range explanatory perspectives. When committed, organize a job and carry it through. Skeptical and independent, have high standards of competence and performance – for themselves and others.",
    characteristics: ["Original Minds", "Long-Range Planning", "Independent", "High Standards", "Logical"]
  },
  {
    id: "ISTP",
    name: "The Craftsman",
    description: "Tolerant and flexible, quiet observers until a problem appears, then act quickly to find workable solutions. Analyze what makes things work and readily get through large amounts of data to isolate the core of practical problems. Interested in cause and effect, organize facts using logical principles, value efficiency.",
    characteristics: ["Flexible & Calm", "Workable Solutions", "Efficiency-Oriented", "Logical Analysis", "Observant"]
  },
  {
    id: "ISFP",
    name: "The Composer",
    description: "Quiet, friendly, sensitive, and kind. Enjoy the present moment, what's going on around them. Like to have their own space and to work within their own time frame. Loyal and committed to their values and to people who are important to them. Dislike disagreements and conflicts, do not force their opinions or values on others.",
    characteristics: ["Sensitive & Kind", "Enjoy the Present", "Loyal", "Dislike Conflict", "Respectful"]
  },
  {
    id: "INFP",
    name: "The Healer",
    description: "Idealistic, loyal to their values and to people who are important to them. Want an external life that is congruent with their values. Curious, quick to see possibilities, can be catalysts for implementing ideas. Seek to understand people and to help them fulfill their potential. Adaptable, flexible, and accepting unless a value is threatened.",
    characteristics: ["Idealistic", "Curious", "Adaptable", "Helpful", "Value-Driven"]
  },
  {
    id: "INTP",
    name: "The Architect",
    description: "Seek to develop logical explanations for everything that interests them. Theoretical and abstract, interested more in ideas than in social interaction. Quiet, contained, flexible, and adaptable. Have unusual ability to focus in depth to solve problems in their area of interest. Skeptical, sometimes critical, always analytical.",
    characteristics: ["Idea-Focused", "Theoretical Analysis", "Deep Focus", "Flexible", "Analytical"]
  },
  {
    id: "ESTP",
    name: "The Dynamo",
    description: "Flexible and tolerant, they take a pragmatic approach focused on immediate results. Theories and conceptual explanations bore them – they want to act energetically to solve the problem. Focus on the here-and-now, spontaneous, enjoy each moment that they can be active with others. Enjoy material comforts and style. Learn best through doing.",
    characteristics: ["Energetic Action", "Result-Oriented", "Spontaneous", "Pragmatic", "Hands-on"]
  },
  {
    id: "ESFP",
    name: "The Performer",
    description: "Outgoing, friendly, and accepting. Exuberant lovers of life, people, and material comforts. Enjoy working with others to make things happen. Bring common sense and a realistic approach to their work, and make work fun. Flexible and spontaneous, adapt readily to new people and environments. Learn best by trying a new skill with other people.",
    characteristics: ["Outgoing & Friendly", "Loves Life", "Realistic", "Adaptable", "Team Player"]
  },
  {
    id: "ENFP",
    name: "The Champion",
    description: "Warmly enthusiastic and imaginative. See life as full of possibilities. Make connections between events and information very quickly, and confidently proceed based on the patterns they see. Want a lot of affirmation from others, and readily give appreciation and support. Spontaneous and flexible, often rely on their ability to improvise and their verbal fluency.",
    characteristics: ["Enthusiastic", "Imaginative", "Improvisational", "Verbal Fluency", "Seeking Affirmation"]
  },
  {
    id: "ENTP",
    name: "The Visionary",
    description: "Quick, ingenious, stimulating, alert, and outspoken. Resourceful in solving new and challenging problems. Adept at generating theoretical possibilities and then analyzing them strategically. Good at reading other people. Bored by routine, will seldom do the same thing the same way, apt to turn to one new interest after another.",
    characteristics: ["Quick & Ingenious", "Strategic", "Outspoken", "Dislikes Routine", "Versatile"]
  },
  {
    id: "ESTJ",
    name: "The Supervisor",
    description: "Practical, realistic, matter-of-fact. Decisive, quickly move to implement decisions. Organize projects and people to get things done, focus on getting results in the most efficient way possible. Take care of routine details. Have a clear set of logical standards, systematically follow them and want others to also. Forceful in implementing their plans.",
    characteristics: ["Decisive & Practical", "Organizational Skills", "Efficiency-Focused", "Detail-Oriented", "Forceful"]
  },
  {
    id: "ESFJ",
    name: "The Provider",
    description: "Warmhearted, conscientious, and cooperative. Want harmony in their environment, work with determination to establish it. Like to work with others to complete tasks accurately and on time. Loyal, follow through even in small matters. Notice what others need in their day-to-day lives and try to provide it. Want to be appreciated for who they are and for what they contribute.",
    characteristics: ["Warm & Cooperative", "Harmonious", "Loyal", "Observant of Needs", "Seeking Appreciation"]
  },
  {
    id: "ENFJ",
    name: "The Teacher",
    description: "Warm, empathetic, responsive, and responsible. Highly attuned to the emotions, needs, and motivations of others. Find potential in everyone, want to help others fulfill their potential. May act as catalysts for individual and group growth. Loyal, responsive to praise and criticism. Sociable, facilitate others in a group, and provide inspiring leadership.",
    characteristics: ["Warm & Empathetic", "Attuned to Others", "Growth Catalyst", "Inspiring Leader", "Responsive"]
  },
  {
    id: "ENTJ",
    name: "The Commander",
    description: "Frank, decisive, assume leadership readily. Quickly see illogical and inefficient procedures and policies, develop and implement comprehensive systems to solve organizational problems. Enjoy long-term planning and goal setting. Usually well informed, read lately, enjoy expanding their knowledge and passing it on to others. Forceful in presenting their ideas.",
    characteristics: ["Natural Leader", "Frank & Decisive", "Strategic Planning", "Well-Informed", "Forceful"]
  }
];
