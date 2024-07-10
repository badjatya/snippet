"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

type Props = {};

const Navbar = (props: Props) => {
	const { user, isSignedIn } = useUser();
	const path = usePathname();
	const isDashboard = path.includes("/dashboard");
	if (isDashboard) return null;
	return (
		<div className='bg-white'>
			<div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
				<header className='mb-8 flex items-center justify-between py-4 md:mb-12 md:py-8 xl:mb-16'>
					<Link
						href='/'
						className='inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl'
						aria-label='logo'>
						<Image
							src='/logo/logo.png'
							alt='Logo'
							width={165}
							height={63}
							quality={100}
						/>
					</Link>

					<nav className='hidden gap-12 lg:flex'>
						<Link
							href='/about'
							className='text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary'>
							About
						</Link>
						<Link
							href='/contact'
							className='text-lg text-gray-600 transition duration-100 font-semibold hover:text-primary'>
							Contact
						</Link>
					</nav>

					{isSignedIn ? (
						<Button asChild>
							<Link href='/dashboard'>Dashboard</Link>
						</Button>
					) : (
						<Button asChild>
							<Link href='/sign-up'>Signup</Link>
						</Button>
					)}
				</header>
			</div>
		</div>
	);
};

export default Navbar;
