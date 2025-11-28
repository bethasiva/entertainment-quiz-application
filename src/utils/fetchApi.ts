type FetchAPIParameters = {
	url: string | URL;
	method?: "GET" | "POST" | "PUT" | "DELETE";
	body?: unknown;
};

export const fetchApi = async <T>({ url, method="GET", body }: FetchAPIParameters): Promise<T> => {
	const options: RequestInit = {
		method,
	};

	if (body) {
		options.body = JSON.stringify(body);
		options.headers = { "Content-Type": "application/json" };
	}

	try {
		const response = await fetch(url, options);		
		if (!response.ok) {
			const error = await response.json();
			throw new Error(error.message);
		}

		return await response.json();
	} catch (error: unknown) {
		console.error("Fetch API error:", error);
		throw error;
	}
};
