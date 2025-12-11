import React, { useState } from "react";
import { IconSearch } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

const FindJobs = ({ jobs = [] }) => {
	const navigate=useNavigate();
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
		<div className="w-full px-6 py-6 min-h-screen">
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
						<p className="block sm:hidden ">Search Job</p>
						<IconSearch className="hidden sm:block text-black" size={22} />
					</button>
				</div>
			</div>

			{/* Results */}
			<div className="flex w-[100%] items-center justify-evenly overflow-auto">
				<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					{filteredJobs.length > 0 ? (
						filteredJobs.map((job, index) => (
							<div
								key={index}
								className="p-4 bg-orange-100 rounded-xl shadow-md border">
								{/* Card Header */}
								<div className="flex items-center gap-3">
									<div className="w-12 h-12 bg-orange-300 rounded-full flex items-center justify-center font-bold text-gray-800">
										{job.company.charAt(0)}
									</div>
									<div>
										<h2 className="text-2xl font-semibold text-gray-900">
											{job.title}
										</h2>
										<p className="text-lg  text-gray-800">{job.company}</p>
									</div>
								</div>
								{/* Job Type */}
								<p className="mt-1 text-sm text-orange-500 font-medium">
									💼 {job.jobType}
								</p>

								{/* Salary & Experience */}
								<div className="flex flex-wrap gap-2 mt-3">
									<span className="bg-orange-200 text-orange-700 text-xs px-3 py-1 rounded-full">
										💰 {job.salaryRange} LPA
									</span>
									<span className="bg-blue-100 text-blue-900 text-xs px-3 py-1 rounded-full">
										🧑‍💼 {job.experienceLevel} yrs exp
									</span>
								</div>
								{/* Tech Stack */}
								<div className="mt-4">
									<p className="text-sm text-gray-700 mb-1 font-medium">
										Tech Stack:
									</p>
									<div className="flex flex-wrap gap-2">
										{(Array.isArray(job.techStack)
											? job.techStack
											: (job.techStack || "").split(",")
										)
											.map((s) => (typeof s === "string" ? s.trim() : s))
											.filter(Boolean)
											.map((tech, i) => (
												<span
													key={i}
													className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg border">
													{tech}
												</span>
											))}
									</div>
								</div>
								<div className="block">
									<h2 onClick={()=>navigate(`/applyJob/${job.id}`)} className="flex items-center justify-center text-lg mt-4 p-1 cursor-pointer bg-orange-500 hover:brightness-95 text-white px-6 py-2 rounded-lg font-semibold">
										Apply Now
									</h2>
								</div>
							</div>
						))
					) : (
						<p className=" text-orange-500 text-center text-lg">
							No Jobs Found
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default FindJobs;
