import { Loader } from "./Loader";

export function PageLoader({text}: {text?: string} ) {
    return (
        <div className="flex min-h-screen justify-center items-center flex-col gap-2">
            <Loader />
            {
                text && <span className="ml-4 text-lg">{text}</span>
            }
        </div>
    )
}