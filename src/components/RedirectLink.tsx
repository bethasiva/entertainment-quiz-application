import Link from "next/link";

interface Props {
	href: string;
	text: string;
	classes?: string;
};

export const RedirectLink= ({ href, text, classes }: Props) => {
	return (
		<Link
			href={href}
			className={`dark-button-link ${classes ? classes : "w-max"}`}
		>
			{text}
		</Link>
	);
};
