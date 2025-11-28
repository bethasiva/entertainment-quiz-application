import { KeyValuePair } from "@types";

export const QUIZ_SELECTION_DATA: { [key: string]: KeyValuePair[] } = {
	categories: [
		{ key: "arts_and_literature", value: "arts and literature" },
		{ key: "geography", value: "geography" },
		{ key: "society_and_culture", value: "society and culture" },
		{ key: "general_knowledge", value: "general knowledge" },
		{ key: "history", value: "history" },
		{ key: "film_and_tv", value: "film and tv" },
		{ key: "food_and_drink", value: "food and drink" },
		{ key: "music", value: "music" },
		{ key: "science", value: "science" },
		{ key: "sport_and_leisure", value: "sport and leisure" },
	],
	difficulty: [
		{ key: "easy", value: "easy" },
		{ key: "medium", value: "medium" },
		{ key: "hard", value: "hard" },
	],
};
