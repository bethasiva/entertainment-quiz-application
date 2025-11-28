/**
 * Constructs a query string from an object where each key maps to an array of string values.
 *
 * This function creates a query string that can be appended to a URL. It filters out
 * any key-value pairs where the value array is empty, and then constructs the query
 * string by joining the key-value pairs with `&`.
 *
 * Example:
 * Input: { filter: ["active", "pending"], sort: ["date"] }
 * Output: "filter=active,pending&sort=date"
 */
export const buildQueryString = (obj: { [key: string]: string[] }) => {
	return Object.entries(obj)
		.filter(([_, value]) => value.length > 0)
		.map(([key, value]) => `${key}=${value.join(",")}`)
		.join("&");
};
