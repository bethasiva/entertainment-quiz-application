import {dbPool} from "@dbScripts";
import { QuizScore } from "@quiz/types";

export const getAllUsersQuizzes = async () => {
	const client = await dbPool.connect();
	try {
		const query =
			"SELECT * FROM quiz_scores ORDER BY created_at DESC LIMIT 10;";
		const { rows } = await client.query(query);
		return rows as QuizScore[];
	} catch (error) {
		throw error;
	} finally {
		client.release();
	}
};
