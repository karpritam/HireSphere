import React from "react";
import { toast } from "react-hot-toast";
import { assets } from "../../../assets/assets";
import { useNavigate } from "react-router-dom";
import { deleteJob } from "../../../Service/JobService";

const ManageJobs = ({ jobs, refreshJobs }) => {
	const navigate = useNavigate();

	const handleDelete = async (jobId) => {
		if (!window.confirm("Are you sure you want to delete this job?")) return;

		try {
			await deleteJob(jobId);
			toast.success("Job deleted successfully");
			if (refreshJobs) refreshJobs();
		} catch (err) {
			console.error(err);
			toast.error("Failed to delete job");
		}
	};

	return (
		<div className="w-full px-6 py-6">
			<div className="flex items-center justify-center gap-4">
				<img
					src={assets.manageJobIcon}
					alt="manage job icon"
					className="w-20 h-20"
				/>
				<h1 className="flex justify-center text-3xl font-bold mb-4">
					Manage Jobs
				</h1>
			</div>

			<div className="flex w-[100%] items-center justify-evenly mt-4">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{jobs.length > 0 ? (
						jobs.map((job, index) => (
							<div
								key={index}
								className="p-4 bg-orange-100 rounded-xl shadow-md border">
								{/* Card Header */}
								<div className="flex items-center gap-3">
									<div className="w-12 h-12 bg-orange-300 rounded-full flex items-center justify-center font-bold text-gray-800">
										{job.company?.charAt(0)}
									</div>
									<div>
										<h2 className="text-2xl font-semibold text-gray-900">
											{job.title}
										</h2>
										<p className="text-lg  text-gray-800">{job.company}</p>
									</div>
								</div>

								<p className="mt-1 text-sm text-orange-500 font-medium">
									💼 {job.jobType}
								</p>

								<div className="flex flex-wrap gap-2 mt-3">
									<span className="bg-orange-200 text-orange-700 text-xs px-3 py-1 rounded-full">
										💰 {job.salaryRange} LPA
									</span>
									<span className="bg-blue-100 text-blue-900 text-xs px-3 py-1 rounded-full">
										🧑‍💼 {job.experienceLevel} yrs exp
									</span>
								</div>

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

								<div className="flex justify-evenly gap-2 mt-5">
									<button
										onClick={() => navigate(`/updateJob/${job.id}`)} // 👈 IMPORTANT
										className="bg-blue-500 w-full text-white px-4 py-2 rounded-lg hover:bg-blue-600">
										Update
									</button>

									<button
										onClick={() => handleDelete(job.id)} // 👈 IMPORTANT
										className="bg-red-500 w-full text-white px-4 py-2 rounded-lg hover:bg-red-600">
										Delete
									</button>
								</div>
							</div>
						))
					) : (
						<p className="text-orange-500 text-lg">No jobs found</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default ManageJobs;
