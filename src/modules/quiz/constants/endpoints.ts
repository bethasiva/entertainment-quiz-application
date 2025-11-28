export const PAGE_ENDPOINTS = {
 	HOME: "/quiz-home",
 	QUIZ_SELECTION: "/quiz-selection",
    QUIZ_STATRT: "/quiz-start",
 	USER_QUIZ_SCORES: "/users-quizzes-scores",
} as const;

export const API_ENDPOINTS = {
	QUIZ_STATRT: PAGE_ENDPOINTS.QUIZ_STATRT+"/api",
	USER_QUIZ_SCORES: PAGE_ENDPOINTS.USER_QUIZ_SCORES+"/api",
} as const;