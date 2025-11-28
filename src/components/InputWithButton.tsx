import { OnSubmitForm } from "@types";

interface Props {
	buttonText: string;
	onSubmit: OnSubmitForm;
	required?: boolean;
	placeholder: string;
};

export const InputWithButton= ({
	onSubmit,
	buttonText,
	placeholder,
	required = true,
}: Props) => {
	return (
		<form className="space-y-4 p-4 md:p-5" onSubmit={onSubmit}>
			<div>
				<input
					type="text"
					name="name"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
					placeholder={placeholder}
					required={required}
				/>
			</div>

			<button
				type="submit"
				className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				{buttonText}
			</button>
		</form>
	);
};
