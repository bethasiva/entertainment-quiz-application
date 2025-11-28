import { Loader, PageLoader } from "@components";
import { QuizQuestionsContainer } from "@quiz/containers";
import {
	StringKeyValuePair,
} from "@types";
import { getQuizQuestionsData } from "@quiz/utils";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
	title: "Quiz Questions",
	description: "Quiz application",
};

/**
 * The `QuizStartPage` component is responsible for fetching quiz questions based on the provided search parameters
 * and rendering them using the `QuizQuestionsContainer` component.
 * */
type Props = {
	searchParams: StringKeyValuePair;
};

const QuizStartPage = async ({
	searchParams,
}: Props) => {
	return (
		<Suspense fallback={<PageLoader text="Questions are loading..." />}>
			<QuizStart searchParams={searchParams} />
		</Suspense>
	)
};

async function QuizStart({ searchParams }: Props) {
	const quizQuestionsData = await getQuizQuestionsData(searchParams);
	return <QuizQuestionsContainer quizQuestionsData={quizQuestionsData} />;
}

export default QuizStartPage;
