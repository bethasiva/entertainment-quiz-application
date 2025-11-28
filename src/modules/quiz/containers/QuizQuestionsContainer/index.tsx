"use client";
import { QuizQuestion as QuestionQuestionType } from "@quiz/types";
import { Loader, LargeHeading, RedirectLink} from "@components";
import useQuizQuestions from "./useQuizQuestions";
import { PAGE_ENDPOINTS } from "@quiz/constants";
import { QuizQuestion, QuizSubmitModal } from "@quiz/components";

/**
 * Component for displaying a list of quiz questions and handling quiz submission.
 *
 * This component displays a series of quiz questions provided via `quizQuestionsData` prop.
 * It includes a form for submitting answers, a loading indicator, error handling, and
 * a modal for confirming quiz submission.
 */

interface Props { quizQuestionsData: QuestionQuestionType[] };
export const QuizQuestionsContainer = ({ quizQuestionsData }: Props) => {
	const {
		onFinishQuizHandler,
		openModal,
		setOpenModal,
		onSubmitQuizScore,
		apiStatus,
	} = useQuizQuestions(quizQuestionsData);

	// Display a loading spinner while data is being fetched
	if (apiStatus === "loading")
		return (
			<div className="flex min-h-screen justify-center items-center">
				<Loader />
			</div>
		);
	// Handle API errors
	if (apiStatus === "error") throw Error();

	return (
		<div>
			<LargeHeading text="Start answering the questions😉" />
			<form onSubmit={onFinishQuizHandler}>
				{quizQuestionsData.map((quizQuestionData, index) => (
					<QuizQuestion
						key={quizQuestionData.id}
						quizQuestionData={quizQuestionData}
						questionNumber={`${index + 1}/${quizQuestionsData.length}`}
					/>
				))}

				<div className="text-center sticky bottom-0">
					<RedirectLink href={PAGE_ENDPOINTS.HOME} text="Go Home" />
					<button type="submit" className="dark-button-link">
						Finish Quiz
					</button>
				</div>
			</form>
			{openModal && (
				<QuizSubmitModal
					closeModal={setOpenModal}
					onSubmit={onSubmitQuizScore}
				/>
			)}
		</div>
	);
};
