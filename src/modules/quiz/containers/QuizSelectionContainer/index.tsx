"use client";
import {Checkbox, LargeHeading, RedirectLink} from "@components";
import { buildQueryString } from "@utils";
import useQuizSelection from "./useQuizSelection";
import { PAGE_ENDPOINTS } from "@quiz/constants";
import { KeyValuePair } from "@types";

/**
 * Component for selecting quiz options.
 */
interface Props {
	quizSelectionData: {
		[key: string]: KeyValuePair[];
	},
}
export const QuizSelectionContainer = ({ quizSelectionData }: Props) => {
	const { handleCheckboxChange, selectedQuizData, isQuizLoading, setIsQuizLoading} = useQuizSelection();

	return (
		<div className="p-5">
			<LargeHeading text="Please select the options" />
			{Object.entries(quizSelectionData).map(([category, options]) => (
				<div key={category}>
					<h1 className="capitalize text-lg font-bold tracking-widest">
						{category}
					</h1>
					<div className="my-4 grid gap-3 sm:grid-cols-3">
						{options.map(({ key, value }) => (
							<Checkbox
								key={key}
								optionKey={category}
								optionName={value}
								optionValue={key}
								onChange={handleCheckboxChange}
								isChecked={selectedQuizData[category]?.includes(key)}
							/>
						))}
					</div>
				</div>
			))}
			<div className="mt-6">
				<RedirectLink href={PAGE_ENDPOINTS.HOME} text="Go Home" />
				<RedirectLink
					href={`${PAGE_ENDPOINTS.QUIZ_STATRT}?${buildQueryString(selectedQuizData)}`}
					text="Start Quiz"
				/>
			</div>
		</div>
	);
};
