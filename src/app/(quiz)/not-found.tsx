"use client";
import {RedirectLink} from "@components";
import { PAGE_ENDPOINTS } from "@quiz/constants";

const NotFound = () => {
	return (
		<div className="min-h-screen flex justify-center items-center">
			<div className="inline-flex flex-col gap-5 items-center">
				<p className="text-2xl font-bold uppercase">No data is available</p>
				<RedirectLink href={PAGE_ENDPOINTS.HOME} text="Go Home" />
			</div>
		</div>
	);
};

export default NotFound;
