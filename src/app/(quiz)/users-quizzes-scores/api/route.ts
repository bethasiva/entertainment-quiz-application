import {getQuizScoresByName} from "@quiz/dbScripts";
import { NextRequest, NextResponse } from "next/server";

/**
 * Handler function for the GET request to fetch quiz scores based on the provided name.
 */
export async function GET(request: NextRequest) {
	// Extract the query parameters from the request URL.
	const { searchParams } = request.nextUrl;
	const name = searchParams.get("name");

	// If no name is provided in the query parameters, return an empty array.
	if (!name) return NextResponse.json([]);

	// Fetch the quiz scores from the database based on the provided name.
	const data = await getQuizScoresByName(name);

	// Return the fetched quiz scores as a JSON response.
	return NextResponse.json(data);
}
