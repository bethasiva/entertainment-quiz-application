import {dbPool} from "@dbScripts";
import { QuizScore } from "@quiz/types";

type QuizScoreWithoutID = Omit<QuizScore, "id">;

export const insertQuizScore = async ({
	name,
	total_questions,
	correct_answers,
	message,
	grade,
	status,
}: QuizScoreWithoutID): Promise<string | null> => {
	const client = await dbPool.connect();
	try {
		const query = `
        INSERT INTO quiz_scores (name, total_questions, correct_answers, message, grade, status)
        VALUES ($1, $2, $3, $4, $5, $6)
		RETURNING id
      `;
		const values = [
			name,
			total_questions,
			correct_answers,
			message,
			grade,
			status,
		];
		const updatedData = await client.query(query, values);
		return updatedData.rows[0].id;
	} catch (error) {
		throw error;
	} finally {
		client.release();
	}
};
