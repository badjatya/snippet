import Sidebar from "@/layouts/Sidebar";
import type { Metadata } from "next";

type Props = {
	children: React.ReactNode;
};

export const metadata: Metadata = {
	title: "Snippet | Dashboard",
	description: "A modern code snippet manager",
};

export default function DashboardLayout({ children }: Props) {
	return (
		<section className='flex'>
			<Sidebar />

			<div className='flex-grow'>{children}</div>
		</section>
	);
}
