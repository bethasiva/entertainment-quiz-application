"use client";
import { LargeHeading, RedirectLink, InputWithButton, Loader} from "@components";
import { usePathname } from "next/navigation";
import useQuizzesScores from "./useQuizzesScores";
import { QuizScore } from "@quiz/types";
import { PAGE_ENDPOINTS } from "@quiz/constants";
import { QuizScoreCard } from "@quiz/components";

/**
 * A component that displays the latest quiz scores for all users and includes a search feature to find specific users' scores.
 */
interface Props {
	usersQuizesScoresData: QuizScore[];
}
export const UsersQuizzesScoresContainer = ({
	usersQuizesScoresData,
}: Props) => {
	const pathname = usePathname();
	const { onNameSubmitHandler, apiStatus, searchResults } = useQuizzesScores(
		usersQuizesScoresData,
	);

	if (apiStatus === "error") throw Error();
	return (
		<div className="w-full">
			<LargeHeading text="All Users Latest Quizzes Scores" />
			<div className="text-center py-6 sticky top-0">
				<RedirectLink href={PAGE_ENDPOINTS.HOME} text="Go Home" />
			</div>

			<div className="md:w-2/4 mx-auto">
				<InputWithButton
					buttonText="Search"
					placeholder="Enter any name"
					onSubmit={onNameSubmitHandler}
					required={false}
				/>
			</div>

			{apiStatus !== "loading" && !searchResults.length && (
				<LargeHeading text="No results found" />
			)}

			{apiStatus === "loading" ? (
				<Loader />
			) : (
				<div className="m-4 grid grid-cols-1 gap-5 md:grid-cols-2">
					{searchResults.map((quizScore) => (
						<a
							key={quizScore.id}
							href={`${pathname}/${quizScore.id}`}
							className="rounded-lg bg-gray-700 hover:shadow-lg hover:shadow-white transition duration-500"
							target="_blank"
							rel="noopener noreferrer"
						>
							<QuizScoreCard quizScore={quizScore} />
						</a>
					))}
				</div>
			)}
		</div>
	);
};
