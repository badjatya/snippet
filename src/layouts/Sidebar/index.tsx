"use client";
import { LogOut } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Home, User, Settings, Calendar, PhoneCall } from "lucide-react";

const SidebarData = [
	{
		name: "Base",
		items: [
			{
				name: "Home",
				icon: Home,
				path: "/dashboard/mentee",
			},
			{
				name: "Profile",
				icon: User,
				path: "/dashboard/mentee/profile",
			},
			{
				name: "Settings",
				icon: Settings,
				path: "/dashboard/mentee/settings",
			},
		],
	},
	{
		name: "Meetings",
		items: [
			{
				name: "Calendar",
				icon: Calendar,
				path: "/dashboard/mentee/calendar",
			},
			{
				name: "Bookings",
				icon: PhoneCall,
				path: "/dashboard/mentee/bookings",
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
					<button className='flex w-full items-center space-x-2 p-2 rounded-md hover:bg-blue-200 transition-colors ease-in duration-100'>
						<LogOut className='w-5 h-5' />
						<span>Logout</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
