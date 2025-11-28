/**
 * Shuffles the elements of an array randomly.
 */

export const suffleItems = (array: string[]) => {
	return array.sort(() => Math.random() - 0.5);
};
