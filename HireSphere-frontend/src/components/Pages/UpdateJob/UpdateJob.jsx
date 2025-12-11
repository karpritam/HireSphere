import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { assets } from "../../../assets/assets";

const UpdateJob = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const [data, setData] = useState({
		title: "",
		location: "",
		company: "",
		jobType: "",
		salaryRange: "",
		experienceLevel: "",
		techStack: "",
		description: "",
	});

	const [loading, setLoading] = useState(false);

	// FETCH EXISTING JOB DATA
	useEffect(() => {
		const fetchJob = async () => {
			try {
				const res = await axios.get(
					`http://localhost:8080/api/v1.0/jobs/${id}`
				);
				setData(res.data);
			} catch (err) {
				console.log(err);
				toast.error("Failed to load job data.");
			}
		};
		fetchJob();
	}, [id]); 

	// HANDLE INPUT CHANGE
	const onChangeHandler = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	// HANDLE UPDATE SUBMIT
	const onSubmitHandler = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			await axios.put(`http://localhost:8080/api/v1.0/jobs/${id}`, data);
			toast.success("Job updated successfully!");
			navigate("/manageJobs");
		} catch (err) {
			toast.error("Failed to update job.");
			console.log(err);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="relative flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-10 ">
			<div className="absolute top-10 left-10  flex items-center group cursor-pointer">
				<img
					onClick={() => navigate("/manageJobs")}
					src={assets.leftArrow}
					alt="left arrow"
					className="w-10 h-10 transition-transform group-hover:-translate-x-1"
				/>
				{/* Hover Text */}
				<span className="ml-2 text-gray-800 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
					Back
				</span>
			</div>
			<div className="flex flex-col w-full md:w-[45%] gap-6">
				<h1 className="text-center font-bold text-4xl">
					Update <span className="text-orange-500">Job</span>
				</h1>

				<form onSubmit={onSubmitHandler} className="space-y-4">
					{/* Row 1 */}
					<div className="flex gap-4">
						<div className="w-full">
							<label>Job Title</label>
							<input
								name="title"
								value={data.title}
								onChange={onChangeHandler}
								type="text"
								className="w-full border border-orange-400 rounded-md py-2 px-3"
							/>
						</div>

						<div className="w-full">
							<label>Job Location</label>
							<input
								name="location"
								value={data.location}
								onChange={onChangeHandler}
								type="text"
								className="w-full border border-orange-400 rounded-md py-2 px-3"
							/>
						</div>
					</div>

					{/* Row 2 */}
					<div className="flex gap-4">
						<div className="w-full">
							<label>Company</label>
							<input
								name="company"
								value={data.company}
								onChange={onChangeHandler}
								type="text"
								className="w-full border border-orange-400 rounded-md py-2 px-3"
							/>
						</div>

						<div className="w-full">
							<label>Job Type</label>
							<select
								name="jobType"
								value={data.jobType}
								onChange={onChangeHandler}
								className="w-full border border-orange-400 rounded-md py-2 px-3">
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
							<label>Salary Range</label>
							<input
								name="salaryRange"
								value={data.salaryRange}
								onChange={onChangeHandler}
								type="text"
								className="w-full border border-orange-400 rounded-md py-2 px-3"
							/>
						</div>

						<div className="w-full">
							<label>Experience Level</label>
							<input
								name="experienceLevel"
								value={data.experienceLevel}
								onChange={onChangeHandler}
								type="text"
								className="w-full border border-orange-400 rounded-md py-2 px-3"
							/>
						</div>
					</div>

					{/* Tech Stack */}
					<div>
						<label>Tech Stack</label>
						<input
							name="techStack"
							value={data.techStack}
							onChange={onChangeHandler}
							type="text"
							className="w-full border border-orange-400 rounded-md py-2 px-3"
						/>
					</div>

					{/* Description */}
					<div>
						<label>Description</label>
						<textarea
							name="description"
							value={data.description}
							onChange={onChangeHandler}
							rows="4"
							className="w-full border border-orange-400 rounded-md py-2 px-3"
						/>
					</div>

					<button
						type="submit"
						disabled={loading}
						className="w-full bg-orange-500 text-white font-semibold py-3 rounded-lg">
						{loading ? "Updating..." : "Update Job"}
					</button>
				</form>
			</div>
		</div>
	);
};

export default UpdateJob;
