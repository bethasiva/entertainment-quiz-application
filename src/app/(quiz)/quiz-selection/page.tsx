import {QUIZ_SELECTION_DATA} from "@quiz/constants";
import {QuizSelectionContainer} from "@quiz/containers";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Select Quiz Options",
	description: "Quiz application",
};

const QuizSelectionPage = () => {
	return <QuizSelectionContainer quizSelectionData={QUIZ_SELECTION_DATA} />;
};

export default QuizSelectionPage;
