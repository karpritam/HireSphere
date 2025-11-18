import React from "react";
import { IconSearch } from "@tabler/icons-react";

const FindJobs = () => {
	return (
		<div>
			<div className="flex items-center justify-center">
				{/* Search Section */}
				<div className="flex flex-col  sm:flex-row items-center gap-3 bg-gray/20 backdrop-blur-md p-4 rounded-2xl shadow-lg mt-4 border border-gray/10 required">
					<div className="flex flex-col w-full sm:w-[40%]">
						<label className="text-sm text-gray-900 mb-1 flex left-0">
							Job Type
						</label>

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
		</div>
	);
};

export default FindJobs;
