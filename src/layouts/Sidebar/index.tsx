"use client";
import { LogOut } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Star, Tags, Braces, Languages } from "lucide-react";
import { SignOutButton } from "@clerk/nextjs";

const SidebarData = [
	{
		name: "Quick Links",
		items: [
			{
				name: "Snippets",
				icon: Braces,
				path: "/dashboard/snippets",
			},
			{
				name: "Tags",
				icon: Tags,
				path: "/dashboard/tags",
			},
			{
				name: "Favorites",
				icon: Star,
				path: "/dashboard/favorites",
			},
			{
				name: "Languages",
				icon: Languages,
				path: "/dashboard/languages",
			},
		],
	},
];

const Sidebar = () => {
	return (
		<div className='bg-green-100'>
			<div className='flex flex-col h-screen p-4 lg:p-6 relative'>
				{/* Sidebar */}
				<div
					className={`fixed inset-y-0 left-0 transform md:relative w-48 `}>
					{/* Logo Section */}
					<Link href='/'>
						<div className='relative w-32 h-8 md:w-40 md:h-12'>
							<Image
								src='/logo/logo.png'
								alt='snippet logo'
								fill
							/>
						</div>
					</Link>

					{/* Navigation */}
					<div className='flex-grow mt-8'>
						<nav className='flex flex-col space-y-4'>
							{SidebarData.map((item) => (
								<div key={item.name} className='space-y-1'>
									<div className='text-sm font-semibold text-gray-500'>
										{item.name}
									</div>
									<div className='flex flex-col space-y-1'>
										{item.items.map((subItem) => (
											<Link
												key={subItem.name}
												href={subItem.path}
												className='flex items-center space-x-2 p-2 rounded-md hover:bg-blue-200 transition-colors ease-in duration-100'>
												<subItem.icon className='w-5 h-5' />
												<span>{subItem.name}</span>
											</Link>
										))}
									</div>
								</div>
							))}
						</nav>
					</div>
				</div>
				{/* Logout Button */}
				<div className='hidden lg:block absolute bottom-0 w-[79%] h-16'>
					<SignOutButton>
						<div className='cursor-pointer flex w-full items-center space-x-2 p-2 rounded-md hover:bg-blue-200 transition-colors ease-in duration-100'>
							<LogOut className='w-5 h-5' />
							<span>Logout</span>
						</div>
					</SignOutButton>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
