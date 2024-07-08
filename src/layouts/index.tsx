"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

type Props = {};

const Layout = (props: Props) => {
	const path = usePathname();
	const isDashboard = path.includes("/dashboard");
	return <>{isDashboard ? <Sidebar /> : <Navbar />}</>;
};

export default Layout;
