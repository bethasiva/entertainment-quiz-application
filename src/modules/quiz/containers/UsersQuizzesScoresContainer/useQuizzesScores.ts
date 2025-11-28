import { APIStatus, OnSubmitForm } from "@types";
import { useCallback, useState } from "react";
import {fetchApi} from "@utils";
import { API_ENDPOINTS } from "@quiz/constants";
import { QuizScore } from "@quiz/types";

/**
 * A custom hook to manage the state and logic for displaying and searching users' quiz scores.
 */
const useQuizzesScores = (
	usersQuizesScoresData: QuizScore[],
) => {
	const [apiStatus, setApiStatus] = useState<APIStatus>("initial");
	const [searchResults, setSearchResults] = useState(usersQuizesScoresData);

	/**
	 * Handles the form submission for searching quiz scores by name.
	 */
	const onNameSubmitHandler = useCallback<OnSubmitForm>(
		async (event) => {
			event.preventDefault();
			const formData = new FormData(event.currentTarget);
			const name = formData.get("name") as string;
			if (!name.trim()) return setSearchResults(usersQuizesScoresData);

			try {
				setApiStatus("loading");
				const url = `${API_ENDPOINTS.USER_QUIZ_SCORES}?name=${name.trim()}`;
				const response = await fetchApi<QuizScore[]>({ url });
				setSearchResults(response);
				setApiStatus("initial");
			} catch (error) {
				setApiStatus("error");
			}
		},
		[usersQuizesScoresData],
	);

	return { apiStatus, searchResults, onNameSubmitHandler };
};

export default useQuizzesScores;
