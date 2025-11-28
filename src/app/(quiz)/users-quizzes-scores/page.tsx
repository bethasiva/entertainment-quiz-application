import { PageLoader } from "@components";
import { UsersQuizzesScoresContainer } from "@quiz/containers";
import { getAllUsersQuizzes } from "@quiz/dbScripts";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

// Mark this page as dynamic to force server-side rendering on every request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
	title: "Quiz Scores",
	description: "Quiz application",
};

/**
 * Page component that displays all users' quizzes scores.
 */
const UsersQuizzesScoresPage = async () => {
	return (
		<Suspense fallback={<PageLoader text="Fetching last 10 quize scores..."/>}>
			<UsersQuizzesScores />
		</Suspense>
	)
};

async function UsersQuizzesScores() {
	// Fetch all users' quizzes scores data from the database.
	const usersQuizesScoresData = await getAllUsersQuizzes();

	// If no data is found, trigger a 404 error.
	if (!(Array.isArray(usersQuizesScoresData) && usersQuizesScoresData.length)) {
		return notFound();
	}

	// Return the container component with the fetched data.
	return (
		<UsersQuizzesScoresContainer
			usersQuizesScoresData={usersQuizesScoresData}
		/>
	);
}

export default UsersQuizzesScoresPage;
