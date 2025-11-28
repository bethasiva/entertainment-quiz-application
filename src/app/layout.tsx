import "./globals.css";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="bg-cyan-700">
				<main className="flex flex-col items-center justify-between mx-5">
					{children}
				</main>
			</body>
		</html>
	);
}
