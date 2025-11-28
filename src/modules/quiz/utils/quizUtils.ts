import { ENV } from "@constants";
import {
	StringArrayKeyValuePair,
	StringKeyValuePair,
} from "@types";
import { fetchApi, suffleItems, buildQueryString } from "@utils";

import { API_ENDPOINTS, QUIZ_SCORE_CONFIG } from "@quiz/constants";
import { QuizSubmitedData, 	QuizApiResponse,
	QuizQuestion, } from "@quiz/types";

/**
 * Computes and retrieves the manipulated quiz score based on the user's performance.
 *
 * This function calculates the percentage of correct answers and compares it
 * with the configured score ranges. It then returns the corresponding score
 * data along with the submitted quiz data.
 */
type ManipulatedQuizScore = QuizSubmitedData & {
	message: string;
	grade: string;
	status: string;
} | null;

export const getMainpulatedQuizScore = (quizData: QuizSubmitedData): ManipulatedQuizScore => {
	// Calculate the percentage of correct answers.
	const correct_answers_percentage =
		(quizData.correct_answers * 100) / quizData.total_questions;

	// Iterate through the quiz score configuration to find a matching percentage.
	for (const scoreObj of QUIZ_SCORE_CONFIG) {
		if (correct_answers_percentage <= scoreObj.correct_answers_percentage) {
			// Return combined data of the matched score configuration and submitted quiz data.
			return {
				...scoreObj.data,
				...quizData,
			};
		}
	}
	// Return null if no matching percentage is found.
	return null;
};

/**
 * Fetches and processes quiz questions based on the search parameters.
 */
export async function getQuizQuestionsData(searchParams: StringKeyValuePair): Promise<QuizQuestion[]> {
	const queryParams: StringArrayKeyValuePair = {};

	// Convert search parameters into the format required by the API.
	Object.entries(searchParams).forEach(([key, value]) => {
		queryParams[key] = value.split(",");
	});

	// Build the API URL with query parameters.
	const url = `${ENV.APP_BASE_URL}${API_ENDPOINTS.QUIZ_STATRT}?${buildQueryString(
		queryParams,
	)}`;

	// Fetch data from the API.
	const questionsData = await fetchApi<QuizApiResponse>({ url });

	// Process the fetched data to match the expected format.
	return questionsData.map((q) => {
		return {
			...q,
			question: q.question.text,
			categoryName: q.category.split("_").join(" "),
			allOptions: suffleItems([
				...q.incorrectAnswers,
				q.correctAnswer,
			]),
		};
	});
}
