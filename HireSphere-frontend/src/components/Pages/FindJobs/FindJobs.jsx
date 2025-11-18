import React, { useState } from "react";
import { IconSearch } from "@tabler/icons-react";

const FindJobs = ({ jobs = [] }) => {
	const [filters, setFilters] = useState({
		type: "",
		title: "",
		location: "",
	});

	const handleChange = (e) => {
		setFilters({ ...filters, [e.target.name]: e.target.value });
	};

	const filteredJobs = Array.isArray(jobs)
		? jobs.filter((job) => {
				const matchesType =
					filters.type === "" ||
					job.jobType?.toLowerCase().includes(filters.type.toLowerCase());

				const matchesTitle =
					filters.title === "" ||
					job.title?.toLowerCase().includes(filters.title.toLowerCase());

				const matchesLocation =
					filters.location === "" ||
					job.location?.toLowerCase().includes(filters.location.toLowerCase());

				return matchesType && matchesTitle && matchesLocation;
		  })
		: [];

	return (
		<div className="w-full px-6 py-6">
			<div className="flex items-center justify-center">
				<div className="flex flex-col sm:flex-row items-center gap-3 bg-white shadow-lg p-4 rounded-xl border w-full max-w-5xl">
					{/* Job Type */}
					<div className="flex flex-col w-full sm:w-[30%]">
						<label className="text-sm font-medium text-gray-800 mb-1">
							Job Type
						</label>
						<select
							name="type"
							value={filters.type}
							onChange={handleChange}
							className="p-2 rounded-lg border border-orange-400">
							<option value="">Any</option>
							<option>Internship</option>
							<option>Full-time</option>
							<option>Part-time</option>
						</select>
					</div>

					{/* Job Title */}
					<div className="flex flex-col w-full sm:w-[30%]">
						<label className="text-sm font-medium text-gray-800 mb-1">
							Job Title
						</label>
						<input
							name="title"
							value={filters.title}
							onChange={handleChange}
							type="text"
							placeholder="Software Engineer"
							className="p-2 rounded-lg border border-orange-400"
						/>
					</div>

					{/* Job Location */}
					<div className="flex flex-col w-full sm:w-[30%]">
						<label className="text-sm font-medium text-gray-800 mb-1">
							Location
						</label>
						<input
							name="location"
							value={filters.location}
							onChange={handleChange}
							type="text"
							placeholder="Kolkata"
							className="p-2 rounded-lg border border-orange-400"
						/>
					</div>

					{/* Search Button */}
					<button className="flex items-center justify-center w-full sm:w-auto mt-2 sm:mt-6 bg-orange-400 p-3 rounded-xl hover:bg-orange-500">
						<IconSearch className="text-black" size={22} />
					</button>
				</div>
			</div>

			{/* Results */}
			<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{filteredJobs.length > 0 ? (
					filteredJobs.map((job, index) => (
						<div
							key={index}
							className="p-4 bg-gray-300 rounded-xl shadow-md border">
							<h2 className="text-lg font-bold">{job.title}</h2>
							<h3>{job.company}</h3>
							<p>{job.location}</p>
							<p className="text-orange-500">💼 {job.jobType}</p>
							<p>INR {job.salaryRange} LPA</p>
							<p>{job.experienceLevel}y</p>
							<p>skills: {job.techStack}</p>
							<div>
								<h2 className="flex items-center justify-center text-lg p-1 cursor-pointer bg-orange-400 text-gray-900 hover:bg-orange-500 rounded-lg">
									Apply Now
								</h2>
							</div>
						</div>
					))
				) : (
					<p className=" text-orange-500 text-center text-lg">No Jobs Found</p>
				)}
			</div>
		</div>
	);
};

export default FindJobs;
