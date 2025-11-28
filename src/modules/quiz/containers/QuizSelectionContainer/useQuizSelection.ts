import { useCallback, useState } from "react";
import { StringArrayKeyValuePair as SelectedQuizData } from "@types";

/**
 * Custom hook to manage the state of selected quiz options.
 */
const useQuizSelection = () => {
	const [selectedQuizData, setSelectedQuizData] = useState<SelectedQuizData>(
		{},
	);

	const [isQuizLoading, setIsQuizLoading] = useState<boolean>(false);
	/**
	 * Handles the change event for a checkbox in a given category.
	 *
	 * Updates the `selectedQuizData` state by adding or removing the selected option
	 * from the category's list of selected options.
	 */
	const handleCheckboxChange = useCallback(
		(category: string, option: string) => {
			setSelectedQuizData((prev) => {
				let updatedOptions: string[] = [];
				if (Array.isArray(prev[category])) {
					if (prev[category].includes(option)) {
						// Remove option if it's already selected
						updatedOptions = prev[category].filter((opt) => opt !== option);
					} else {
						// Add option if it's not yet selected
						updatedOptions = [...prev[category], option];
					}
				} else {
					// Initialize with the selected option
					updatedOptions = [option];
				}
				return {
					...prev,
					[category]: updatedOptions,
				};
			});
		},
		[],
	);

	return { handleCheckboxChange, selectedQuizData, isQuizLoading, setIsQuizLoading };
};

export default useQuizSelection;
