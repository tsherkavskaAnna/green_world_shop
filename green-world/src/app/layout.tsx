import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Green World",
	description: "Plants shop",
	icons: {
		icon: "/favicon/plants-48.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<link rel="icon" href="/favicon/plants-96.png" sizes="any" />
				{children}
			</body>
		</html>
	);
}
