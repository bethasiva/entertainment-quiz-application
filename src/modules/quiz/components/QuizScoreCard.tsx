"use client";
import { QuizScore } from "@quiz/types";

interface Props { quizScore: QuizScore };
export const QuizScoreCard = ({
	quizScore,
}: Props) => {
	const { message, quizScoreData } = getQuizScoreData(quizScore);
	return (
		<div className="p-5 rounded-lg bg-gray-700">
			<h2 className="text-center mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
				{message}
			</h2>

			<dl className="grid grid-cols-2 gap-8 p-4 mx-auto text-gray-900 lg:grid-cols-3">
				{quizScoreData.map(renderQuizScoreCard)}
			</dl>
		</div>
	);
};

function getQuizScoreData(quizScore: QuizScore) {
	const { name, message, correct_answers, total_questions, grade, status } = quizScore;
	const quizScoreData = [
		["Name", name],
		["Score", `${(correct_answers * 100) / total_questions}%`],
		["Total questions", total_questions],
		["Correct answers", correct_answers],
		["Grade", grade],
		["Status", status],
	];

	return {
		message,
		quizScoreData
	};
}

function renderQuizScoreCard(scoreData: (string | number)[]) {
	return (<div
		key={scoreData[0]}
		className="flex flex-col items-center justify-center"
	>
		<dt className="mb-2 text-2xl tracking-wider font-extrabold capitalize">
			{scoreData[1]}
		</dt>
		<dd className="text-gray-500 dark:text-gray-400">{scoreData[0]}</dd>
	</div>)
}
