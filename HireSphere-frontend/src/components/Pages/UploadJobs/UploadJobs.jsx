import React, { useState } from "react";
// import toast from "react-hot-toast";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createJob } from "../../../Service/JobService";
import { assets } from "../../../assets/assets";

const UploadJobs = () => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState({
		title: "",
		company: "",
		location: "",
		salaryRange: "",
		jobType: "",
		experienceLevel: "",
		techStack: "",
		description: "",
	});

	const onChangeHandler = (e) => {
		const { name, value } = e.target;
		setData((prev) => ({ ...prev, [name]: value }));
	};

	const onSubmitHandler = async (e) => {
		e.preventDefault();

		// Validation
		if (
			!data.title ||
			!data.company ||
			!data.location ||
			!data.salaryRange ||
			!data.jobType ||
			!data.experienceLevel ||
			!data.techStack ||
			!data.description
		) {
			toast.error("Please fill all fields!");
			return;
		}

		setLoading(true);

		try {
			const response = await createJob(data);

			if (response.status === 200 || response.status === 201) {
				toast.success("Job uploaded successfully!");
				setData({
					title: "",
					company: "",
					location: "",
					salaryRange: "",
					jobType: "",
					experienceLevel: "",
					techStack: "",
					description: "",
				});
			}
		} catch (err) {
			console.error(err);
			toast.error("Error uploading job!");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-16 bg-white text-gray-900 max-w-full overflow-hidden">
			{/* Left Form */}
			<div className="flex flex-col w-full md:w-[45%] gap-6">
				<h1 className="text-center font-bold text-4xl">
					Upload <span className="text-orange-500">Jobs</span>
				</h1>

				<form onSubmit={onSubmitHandler} className="space-y-4">
					{/* Row 1 */}
					<div className="flex gap-4">
						<div className="w-full">
							<label className="text-sm font-medium text-gray-800">
								Job Title
							</label>
							<input
								name="title"
								value={data.title}
								onChange={onChangeHandler}
								required
								type="text"
								placeholder="Software Engineer"
								className="w-full border border-orange-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
							/>
						</div>

						<div className="w-full">
							<label className="text-sm font-medium text-gray-800">
								Job Location
							</label>
							<input
								name="location"
								value={data.location}
								onChange={onChangeHandler}
								required
								type="text"
								placeholder="Kolkata"
								className="w-full border border-orange-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
							/>
						</div>
					</div>

					{/* Row 2 */}
					<div className="flex gap-4">
						<div className="w-full">
							<label className="text-sm font-medium text-gray-800">
								Company
							</label>
							<input
								name="company"
								value={data.company}
								onChange={onChangeHandler}
								required
								type="text"
								placeholder="Google"
								className="w-full border border-orange-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
							/>
						</div>

						<div className="w-full">
							<label className="text-sm font-medium text-gray-800">
								Job Type
							</label>
							<select
								name="jobType"
								value={data.jobType}
								onChange={onChangeHandler}
								required
								className="w-full border border-orange-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-400">
								<option value="">Select Job Type</option>
								<option>Internship</option>
								<option>Full-time</option>
								<option>Part-time</option>
							</select>
						</div>
					</div>

					{/* Row 3 */}
					<div className="flex gap-4">
						<div className="w-full">
							<label className="text-sm font-medium text-gray-800">
								Salary Range
							</label>
							<input
								name="salaryRange"
								value={data.salaryRange}
								onChange={onChangeHandler}
								required
								type="text"
								placeholder="INR 3.5 LPA - 5 LPA"
								className="w-full border border-orange-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
							/>
						</div>

						<div className="w-full">
							<label className="text-sm font-medium text-gray-800">
								Experience Level
							</label>
							<input
								name="experienceLevel"
								value={data.experienceLevel}
								onChange={onChangeHandler}
								required
								type="text"
								placeholder="0-1 year"
								className="w-full border border-orange-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
							/>
						</div>
					</div>

					{/* Tech Stack */}
					<div>
						<label className="text-sm font-medium text-gray-800">
							Tech Stack
						</label>
						<input
							name="techStack"
							value={data.techStack}
							onChange={onChangeHandler}
							required
							type="text"
							placeholder="Java, Spring Boot, React"
							className="w-full border border-orange-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
						/>
					</div>

					{/* Description */}
					<div>
						<label className="text-sm font-medium text-gray-800">
							Description
						</label>
						<textarea
							name="description"
							value={data.description}
							onChange={onChangeHandler}
							required
							rows={5}
							placeholder="Write job description here..."
							className="w-full border border-orange-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-400"></textarea>
					</div>

					{/* Submit Button INSIDE form */}
					<div>
						<button
							type="submit"
							disabled={loading}
							className="mt-4 py-3 px-4 sm:mb-5 text-lg rounded-xl w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold">
							{loading ? "Posting..." : "Post Job"}
						</button>
					</div>
				</form>
			</div>

			{/* Right Avatar */}
			<div className="flex items-center justify-center w-full md:w-[55%] sm:mt-10 md:mt-20  overflow-hidden">
				<div className="w-[26rem] md:block sm:hidden md:w-[36rem] lg:w-[38rem]">
					<img
						src={assets.uploadAvatar}
						alt="Upload Job Avatar"
						className="w-full h-full  object-contain"
					/>
				</div>
			</div>
		</div>
	);
};

export default UploadJobs;
