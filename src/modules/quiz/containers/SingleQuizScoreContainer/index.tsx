import { QuizScore } from "@quiz/types";
import { LargeHeading, RedirectLink} from "@components";
import { PAGE_ENDPOINTS } from "@quiz/constants";
import { QuizScoreCard } from "@quiz/components";

/**
 * A component that displays a single quiz score along with the user's name and a link to return home.
 */
interface Props { quizScore: QuizScore };
export const SingleQuizScoreContainer = ({ quizScore }: Props) => {
	return (
		<div>
			<LargeHeading text={`${quizScore.name}'s quiz Score`} />
			<div className="bg-gray-700 my-8 rounded-lg ">
				<QuizScoreCard quizScore={quizScore} />
				<div className="text-center p-6">
					<RedirectLink href={PAGE_ENDPOINTS.HOME} text="Go Home" />
				</div>
			</div>
		</div>
	);
};
