import {LargeHeading, RedirectLink} from "@components";
import { PAGE_ENDPOINTS } from "@quiz/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Quiz App",
	description: "Quiz application",
};

export default function QuizHome() {
	return (
		<div className="flex justify-center items-center min-h-screen text-center">
			<div className="bg-gray-700 flex flex-col border p-10 rounded-lg space-y-28">
				<LargeHeading text="WELCOME GENIUS 💖" />
				<div className="flex flex-col">
					<RedirectLink
						text="Quiz Selection"
						href={PAGE_ENDPOINTS.QUIZ_SELECTION}
						classes="w-auto"
					/>
					<RedirectLink
						text="All Users Quizzes"
						href={PAGE_ENDPOINTS.USER_QUIZ_SCORES}
						classes="w-auto"
					/>
				</div>
			</div>
		</div>
	);
}
