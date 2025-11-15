import React from "react";
import { assets } from "../../../assets/assets";
import { IconSearch } from "@tabler/icons-react";

const Homepage = () => {
	return (
		<div className="flex flex-col-reverse  md:flex-row items-center justify-center px-6 sm:px-10 md:px-16 bg-white text-gray-900 overflow-visible max-w-full">
			{/* Left Section */}
			<div className="flex flex-col w-full md:w-[55%] gap-6 text-center md:text-left">
				<h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
					Find Your{" "}
					<span className="text-orange-400 drop-shadow-md">Dream Job</span> with
					Us
				</h1>

				<p className="text-base sm:text-lg text-gray-600 max-w-md mx-auto md:mx-0">
					Good life begins with a good company. Start exploring thousands of
					jobs all in one place.
				</p>

				{/* Search Section */}
				<div className="flex flex-col sm:flex-row items-center gap-3 bg-gray/20 backdrop-blur-md p-4 rounded-2xl shadow-lg mt-4 border border-gray/10 required">
					<div className="flex flex-col w-full sm:w-[40%]">
						<label className="text-sm text-gray-900 mb-1 flex left-0">
							Job Type
						</label>
						{/* <input
							type="text"
							placeholder="Full-time"
							className="p-2 rounded-lg bg-white/10 border border-gray-600 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
						/> */}
						<select className="p-2 rounded-lg bg-white/10 border border-gray-600 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all">
							<option className="rounded-lg border border-gray-600">
								Internship
							</option>
							<option>Full Time</option>
							<option>Part Time</option>
						</select>
					</div>

					<div className="flex flex-col w-full sm:w-[40%]">
						<label className="text-sm text-gray-900 mb-1 flex left-0">
							Job Title
						</label>
						<input
							type="text"
							placeholder="Software Engineer"
							className="p-2  rounded-lg bg-white/10 border border-gray-600 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
						/>
					</div>

					<div className="flex flex-col w-full sm:w-[40%]">
						<label className="text-sm text-gray-900 mb-1 flex left-0">
							Job Location
						</label>
						<input
							type="text"
							placeholder="Kolkata"
							className="p-2 rounded-lg bg-white/10 border border-gray-600 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
						/>
					</div>
					{/*todo-> when click seach icon go to the find job section */}
					<button className="flex mt-0 sm:mt-4 items-center justify-center w-full h-14 sm:h-12 bg-orange-400 rounded-xl hover:bg-orange-500 active:scale-95 transition-transform cursor-pointer shadow-md">
						<p className="block sm:hidden ">Search Job</p>
						<IconSearch className="hidden sm:block w-8 md:h-8 text-gray-900 " />
					</button>
				</div>
			</div>

			{/* Right Section */}
			<div className="relative flex items-center justify-center w-full md:w-[55%] mt-10 md:mb-0 overflow-visible">
				<div className="relative w-[22rem] sm:w-[26rem] md:w-[34rem] lg:w-[40rem]">
					<img
						src={assets.avatarImg2}
						alt="Job search illustration"
						className="w-full h-full object-contain bg-transparent"
					/>

					{/* Floating Right Card */}
					<div className="absolute hidden sm:block w-fit -right-10 md:-right-5 top-[50%] border border-yellow-400 rounded-lg p-3 backdrop-blur-md bg-white/10 shadow-lg">
						<div className="text-center text-gray-800 text-sm mb-2 font-medium">
							10k+ Got Jobs
						</div>

						{/* Avatar Group (Pure Tailwind) */}
						<div className="flex items-center justify-center -space-x-3">
							<img
								src={assets.avatar1}
								className="w-8 h-8 rounded-full border-2 border-gray-800"
								alt="Avatar 1"
							/>
							<img
								src={assets.avatar2}
								className="w-8 h-8 rounded-full border-2 border-gray-800"
								alt="Avatar 2"
							/>
							<img
								src={assets.avatar3}
								className="w-8 h-8 rounded-full border-2 border-gray-800"
								alt="Avatar 3"
							/>
							<div className="w-8 h-8 flex items-center justify-center bg-yellow-500 text-gray-900 text-xs font-semibold rounded-full border-2 border-gray-800">
								+9
							</div>
						</div>
					</div>

					{/* Floating Left Job Card */}
					<div className="absolute hidden sm:flex flex-col gap-3 -left-20 md:-left-2 top-[25%] border border-orange-400 rounded-lg p-3 backdrop-blur-md bg-white/10 shadow-lg">
						<div className="flex gap-2 items-center">
							<div className="w-10 h-10 p-1 bg-gray-800 rounded-lg flex items-center justify-center">
								<img
									src={assets.google}
									alt="Google"
									className="w-fit h-fit object-contain"
								/>
							</div>
							<div className="text-sm text-gray-800 leading-tight">
								<div className="font-semibold">Software Engineer</div>
								<div className="text-gray-700">New York</div>
							</div>
						</div>
						<div className="flex justify-between text-xs text-gray-600">
							<span>1 day ago</span>
							<span>120 applicants</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Homepage;
