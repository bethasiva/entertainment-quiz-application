import { PageLoader } from "@components";
import {SingleQuizScoreContainer} from "@quiz/containers";
import {getQuizScoreById} from "@quiz/dbScripts";
import { StringKeyValuePair } from "@types";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { validate as isUuid } from "uuid";

export const metadata: Metadata = {
	title: "Quiz Score",
	description: "Quiz application",
};

/**
 * Page component to display a single quiz score based on the provided quiz ID.
 */
interface Props {
	params: StringKeyValuePair;
}
const QuizScorePage = async ({ params }: Props) => {
	return (
		<Suspense fallback={<PageLoader text="Fetching quiz score..." />}>
			<QuizScoreData params={params} />
		</Suspense>
	);
};

async function QuizScoreData({ params }: Props) {
	const id = params["quiz-id"];

	// Validate the quiz ID to ensure it is a valid UUID.
	if (!isUuid(id)) return notFound();

	// Fetch the quiz score from the database by ID.
	const quizScore = await getQuizScoreById(id);

	// If no quiz score is found or the fetched data is empty, return a 404 page.
	if (!(quizScore && Object.keys(quizScore).length)) return notFound();

	// Return the `SingleQuizScoreContainer` component with the fetched quiz score.
	return <SingleQuizScoreContainer quizScore={quizScore} />;
}
export default QuizScorePage;
