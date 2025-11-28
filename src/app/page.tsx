import { PAGE_ENDPOINTS } from "@quiz/constants";
import { redirect } from "next/navigation";

export default function HomePage() {
  redirect(PAGE_ENDPOINTS.HOME); 
}
