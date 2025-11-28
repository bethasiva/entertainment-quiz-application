import { OnSubmitForm } from "@types";
import { InputWithButton } from "@components";

interface Props {
	closeModal: (value: boolean) => void;
	onSubmit: OnSubmitForm;
}

export const QuizSubmitModal = ({
	closeModal,
	onSubmit,
}: Props) => {
	return (
		<div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-screen flex bg-slate-600">
			<div className="relative p-4 w-full max-w-md max-h-full">
				<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
					<div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
						<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
							Enter your name to submit
						</h3>
						<button
							onClick={() => closeModal(false)}
							type="button"
							className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
						>
							<svg
								className="w-3 h-3"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 14 14"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
								/>
							</svg>
							<span className="sr-only">Close modal</span>
						</button>
					</div>

					<InputWithButton
						buttonText="Submit Quiz"
						onSubmit={onSubmit}
						placeholder="Enter your full name"
					/>
				</div>
			</div>
		</div>
	);
};
