import { ENV } from "@constants";
import { insertQuizScore } from "@quiz/dbScripts";
import { QuizApiResponse } from "@quiz/types";
import { fetchApi } from "@utils";
import { getMainpulatedQuizScore } from "@quiz/utils";
import { type NextRequest, NextResponse } from "next/server";

/**
 * Handles GET requests to fetch questions from trivia API.
 * */
export async function GET(request: NextRequest) {
	try {
		const { searchParams } = request.nextUrl;
		const base = ENV.QUIZ_QUESTIONS_API_ENDPOINT;

		// Construct the API URL with query parameters if provided.
		const url = searchParams.toString() ? `${base}/?${searchParams.toString()}` : base;

		// Fetch data from the trivia questions API.
		const data = await fetchApi<QuizApiResponse>({ url });

		// Return the fetched data as a JSON response.
		return NextResponse.json(data);
	} catch (error) {
		console.log(error);

		// Return an error response if an exception occurs.
		// Return an error response if an exception occurs.
		return new NextResponse(
			JSON.stringify({ error: "Internal Server Error" }),
			{ status: 500 },
		);
	}
}

/**
 * Handles POST requests to insert a quiz score into the database.
 */
export async function POST(request: NextRequest) {
	try {
		// Parse the JSON body from the request.
		const reqBody = await request.json();
		if (!reqBody) {
			return new NextResponse(JSON.stringify({ error: "Invalid data" }), {
				status: 400,
			});
		}

		// Manipulate the quiz score data as required.
		const mainpulatedQuizScore = getMainpulatedQuizScore(reqBody);

		if (!mainpulatedQuizScore) {
			return new NextResponse(JSON.stringify({ error: "Processing error" }), {
				status: 400,
			});
		}
		// Insert the manipulated quiz score into the database and get the inserted ID.
		const insertedId = await insertQuizScore(mainpulatedQuizScore);

		// Return the inserted ID as a JSON response with a 201 status code.
		return new NextResponse(JSON.stringify({ id: insertedId }), {
			status: 201,
		});
	} catch (error) {
		console.log("ERROR:: ", error);

		// Return an error response if an exception occurs.
		return new NextResponse(
			JSON.stringify({ error: "Internal Server Error" }),
			{ status: 500 },
		);
	}
}
