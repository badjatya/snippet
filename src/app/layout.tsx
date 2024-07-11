import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/layouts/Navbar";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "Snippet",
	description: "A modern code snippet manager",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang='en'>
				<body
					className={cn(
						"bg-background font-sans antialiased",
						fontSans.variable
					)}>
					<Navbar />
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
