import {dbPool} from "@dbScripts";
import { QuizScore } from "@quiz/types";

export const getQuizScoreById = async (id: string) => {
	const client = await dbPool.connect();
	try {
		const query = "SELECT * FROM quiz_scores WHERE id = $1";
		const { rows } = await client.query(query, [id]);
		return rows[0] as QuizScore;
	} catch (error: any) {
		throw error;
	} finally {
		client.release();
	}
};
