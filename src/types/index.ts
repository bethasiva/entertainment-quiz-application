export type OnSubmitForm = (event: React.FormEvent<HTMLFormElement>) => void;

export type APIStatus = "loading" | "initial" | "error";

export type KeyValuePair = {
	key: string;
	value: string;
};

// Represents an object where the keys are strings and the values are also strings.
export type StringKeyValuePair = {
	[key: string]: string;
};

// Represents an object where the keys are strings and the values are arrays of strings.
export type StringArrayKeyValuePair = {
	[key: string]: string[];
};
