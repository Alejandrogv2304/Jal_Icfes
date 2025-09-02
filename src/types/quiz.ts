// types/quiz.ts
export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  percentage: number;
  date: string;
  answers: number[];
}
