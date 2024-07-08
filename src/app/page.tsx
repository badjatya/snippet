import Navbar from "@/layouts/Navbar";
import Hero from "./components/Hero";

export default function Home() {
	return (
		<div className='bg-white pb-6 sm:pb-8 lg:pb-12'>
			<div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
				<Navbar />
				<Hero />
			</div>
		</div>
	);
}
