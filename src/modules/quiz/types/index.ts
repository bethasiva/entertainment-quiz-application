
export type QuizScore = {
	id: string;
	message: string;
	grade: string;
	status: string;
} & QuizSubmitedData;

export type QuizQuestion = {
	id: string;
	question: string;
	category: string;
	difficulty: string;
	correctAnswer: string;
	incorrectAnswers: string[];
	allOptions: string[];
	categoryName: string;
};

export type QuizSubmitedData = {
	name: string;
	total_questions: number;
	correct_answers: number;
};

export type QuizApiResponse = {
  category: string;
  id: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  question: {
    text: string;
  };
  tags: string[];
  type: "text_choice" | "multiple_choice"; 
  difficulty: "easy" | "medium" | "hard";
  regions: string[];
  isNiche: boolean;
}[];