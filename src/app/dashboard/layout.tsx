import Sidebar from "@/layouts/Sidebar";

type Props = {
	children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
	return (
		<section className='flex'>
			<Sidebar />

			<div className='flex-grow'>{children}</div>
		</section>
	);
}
