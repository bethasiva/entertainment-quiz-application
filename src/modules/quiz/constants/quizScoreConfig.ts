export const QUIZ_SCORE_CONFIG = [
	{
		correct_answers_percentage: 0,
		data: { message: "Better luck next time!", grade: "F", status: "Failed" },
	},
	{
		correct_answers_percentage: 30,
		data: { message: "You can do better!", grade: "D", status: "Failed" },
	},
	{
		correct_answers_percentage: 60,
		data: { message: "Nice try!", grade: "C", status: "Passed" },
	},
	{
		correct_answers_percentage: 80,
		data: { message: "Good job!", grade: "B", status: "Passed" },
	},
	{
		correct_answers_percentage: 90,
		data: { message: "Great work!", grade: "A", status: "Passed" },
	},
	{
		correct_answers_percentage: 100,
		data: {
			message: "Perfect score! Amazing!",
			grade: "A+",
			status: "Passed",
		},
	},
];
