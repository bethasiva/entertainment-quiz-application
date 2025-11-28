import { APIStatus, OnSubmitForm } from "@types";
import { useCallback, useState } from "react";
import {fetchApi} from "@utils";
import { API_ENDPOINTS, PAGE_ENDPOINTS } from "@quiz/constants";
import { QuizQuestion, QuizSubmitedData } from "@quiz/types";

/**
 * Custom hook for managing quiz question state and handling quiz submission.
 */
const useQuizQuestions = (
	quizQuestionsData: QuizQuestion[],
) => {
	// State to store quiz submission data
	const [quizSubmitData, setQuizSubmitData] = useState<Omit<QuizSubmitedData, "name">>();
	// State to control the visibility of the submission modal
	const [openModal, setOpenModal] = useState(false);
	// State to manage the API status
	const [apiStatus, setApiStatus] = useState<APIStatus>("initial");

	/**
	 * Handler for finishing the quiz.
	 * Calculates the number of correct answers and opens the modal for submission.
	 */
	const onFinishQuizHandler = useCallback<OnSubmitForm>(
		(event) => {
			event.preventDefault();
			const formData = new FormData(event.currentTarget);
			let correct_answers = 0;
			// Calculate the number of correct answers
			quizQuestionsData.forEach((question) => {
				const userAnswer = formData.get(question.id);

				if (userAnswer === question.correctAnswer) {
					correct_answers += 1;
				}
			});

			// Update state with quiz results
			setQuizSubmitData({
				total_questions: quizQuestionsData.length,
				correct_answers,
			});

			// Open the submission modal
			setOpenModal((prev) => !prev);
		},
		[quizQuestionsData],
	);

	/**
	 * Submits quiz data to the API.
	 */
	const submitQuizDataApi = useCallback(async (body: any) => {
		try {
			const url = `${API_ENDPOINTS.QUIZ_STATRT}`;
			const response = await fetchApi<{id: string}>({
				url,
				body,
				method: "POST",
			});

			// Reset API status and handle the response
			let redirectUrl = PAGE_ENDPOINTS.USER_QUIZ_SCORES as string;
			if (response.id) {
				redirectUrl += `/${response.id}`;
			}
			window.location.replace(redirectUrl);
		} catch (error) {
			setApiStatus("error");
		}
	}, []);

	/**
	 * Handler for submitting the quiz score.
	 * Calls the API to submit the quiz data.
	 */
	const onSubmitQuizScore = useCallback<OnSubmitForm>(
		(event) => {
			event.preventDefault();
			setApiStatus("loading");
			const formData = new FormData(event.currentTarget);
			const name = formData.get("name");
			submitQuizDataApi({ name, ...quizSubmitData });
		},
		[quizSubmitData, submitQuizDataApi],
	);

	return {
		onFinishQuizHandler,
		onSubmitQuizScore,
		openModal,
		setOpenModal,
		apiStatus,
	};
};

export default useQuizQuestions;
