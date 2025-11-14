import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { assets } from "../../assets/assets";
import { Bell, Settings } from "lucide-react";

const Menubar = () => {
	const location = useLocation();
	const [menuOpen, setMenuOpen] = useState(false);
	const [showProfileMenu, setShowProfileMenu] = useState(false);

	// Active link style
	const isActive = (path) =>
		location.pathname === path
			? "text-orange-600 font-bold relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-orange-500 after:rounded-full transition-all duration-300"
			: "text-gray-700 hover:text-orange-500 relative hover:after:content-[''] hover:after:absolute hover:after:-bottom-1 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-orange-400 hover:after:rounded-full transition-all duration-300";

	return (
		<nav className="flex items-center justify-between px-6 md:px-10 py-4 bg-white text-gray-900 shadow-lg border-b border-gray-500 relative">
			{/* Left: Logo and Brand Name */}
			<div className="flex items-center gap-3">
				<Link to="/homePage" className="flex items-center gap-2 group">
					<img
						src={assets.jobLogo}
						alt="logo"
						className="h-10 w-10 transition-transform group-hover:rotate-6 group-hover:scale-110"
					/>
					<h1 className="text-xl font-semibold group-hover:text-orange-600 transition-all">
						HireSphere
					</h1>
				</Link>
			</div>

			{/* Center: Navigation Links (Desktop Only) */}
			<ul className="hidden md:flex gap-10 text-md font-medium">
				<li>
					<Link to="/homePage" className={isActive("/homePage")}>
						Home
					</Link>
				</li>
				<li>
					<Link to="/findJobs" className={isActive("/findJobs")}>
						Find Jobs
					</Link>
				</li>
				<li>
					<Link to="/findTalent" className={isActive("/findTalent")}>
						Find Talent
					</Link>
				</li>
				<li>
					<Link to="/uploadJobs" className={isActive("/uploadJobs")}>
						Upload Jobs
					</Link>
				</li>
				<li>
					<Link to="/about" className={isActive("/about")}>
						About Us
					</Link>
				</li>
			</ul>

			{/* Right: Profile + Icons */}
			<div className="flex items-center gap-4 md:gap-6">
				{/* Profile */}
				<div className="relative m-3 z-10 flex items-center gap-2 cursor-pointer hover:text-orange-600 transition-all">
					<span className="font-semibold hidden sm:inline">PSK</span>
					<img
						src={assets.profile}
						alt="Profile"
						className="w-8 h-8 rounded-full border-2 border-gray-300 hover:border-orange-500 transition-all"
						onClick={() => setShowProfileMenu(!showProfileMenu)}
					/>
					{showProfileMenu && (
						<ul className="absolute mt-40 w-44 bg-white text-gray-900 rounded-md shadow-md z-50 animate-fadeIn">
							<li>
								<a
									href="#"
									className="block px-4 py-2 hover:bg-gray-100 hover:rounded-md">
									Login/Register
								</a>
							</li>
							<li>
								<a
									href="#"
									className="block px-4 py-2 hover:bg-gray-300 hover:rounded-md">
									LogOut
								</a>
							</li>
						</ul>
					)}
				</div>

				{/* Settings Icon */}
				<Settings className="p-1.5 rounded-full h-8 w-8 cursor-pointer text-gray-800 hover:text-orange-600 hover:bg-gray-100 transition-transform group-hover:rotate-6 group-hover:scale-110 shadow-[0_0_10px_#FF6C0C]" />

				{/* Notification Bell */}
				<div className="relative cursor-pointer">
					<Bell className="p-1.5 rounded-full h-8 w-8 text-gray-800 hover:text-orange-600 hover:bg-gray-100 transition-transform group-hover:rotate-6 group-hover:scale-110 shadow-[0_0_10px_#FF6C0C]" />
					<span className="absolute top-1 right-1 flex h-2.5 w-2.5">
						<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
						<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-600"></span>
					</span>
				</div>

				{/* Hamburger Menu (Mobile) */}
				<button
					className="md:hidden focus:outline-none"
					onClick={() => setMenuOpen(!menuOpen)}>
					{menuOpen ? (
						<img
							src={assets.crossIcon}
							alt="cross"
							className="h-8 w-8 hover:scale-110 transition-transform"
						/>
					) : (
						<img
							src={assets.menuBar}
							alt="menuBar"
							className="h-8 w-8 hover:scale-110 transition-transform"
						/>
					)}
				</button>
			</div>

			{/* Mobile Dropdown Menu */}
			{menuOpen && (
				<div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 flex flex-col items-center py-4 md:hidden shadow-md animate-slideDown z-50">
					<Link
						to="/homePage"
						className={`py-2 text-lg ${isActive("/homePage")}`}
						onClick={() => setMenuOpen(false)}>
						Home
					</Link>
					<Link
						to="/findJobs"
						className={`py-2 text-lg ${isActive("/findJobs")}`}
						onClick={() => setMenuOpen(false)}>
						Find Jobs
					</Link>
					<Link
						to="/findTalent"
						className={`py-2 text-lg ${isActive("/findTalent")}`}
						onClick={() => setMenuOpen(false)}>
						Find Talent
					</Link>
					<Link
						to="/uploadJobs"
						className={`py-2 text-lg ${isActive("/uploadJobs")}`}
						onClick={() => setMenuOpen(false)}>
						Upload Jobs
					</Link>
					<Link
						to="/about"
						className={`py-2 text-lg ${isActive("/about")}`}
						onClick={() => setMenuOpen(false)}>
						About Us
					</Link>
				</div>
			)}
		</nav>
	);
};

export default Menubar;
