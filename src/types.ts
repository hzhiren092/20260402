export type Dimension = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';

export interface Question {
  id: number;
  text: string;
  options: {
    A: { text: string; dimension: Dimension };
    B: { text: string; dimension: Dimension };
  };
}

export interface MBTIType {
  id: string;
  name: string;
  description: string;
  characteristics: string[];
}

export interface TestResult {
  type: string;
  scores: Record<Dimension, number>;
  strengths: Record<string, number>; // E vs I, S vs N, etc.
}
