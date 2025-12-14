import React, { useEffect, useRef, useState } from "react";
import { assets } from "../../../assets/assets";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { applyJob } from "../../../Service/ApplicantService";

const ApplyJob = () => {
	const { id } = useParams();
	const { state } = useLocation();
	const navigate = useNavigate();

	const [loading, setLoading] = useState(false);
	const [resume, setResume] = useState(null);
	const fileInputRef = useRef(null);

	const jobId = id;
	const jobRole =
		state?.jobRole || localStorage.getItem("jobRole") || "Selected Job";

	useEffect(() => {
		if (!jobId) {
			navigate("/findJobs"); // fallback page
		}
	}, [jobId, navigate]);

	const handleFileChange = (e) => {
		const file = e.target.files[0];

		if (!file) return;

		if (file.size > 5 * 1024 * 1024) {
			alert("File size must be less than 5MB");
			return;
		}

		setResume(file);
	};
	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!resume) {
			toast.error("Please upload your resume");
			return;
		}

		const form = e.target;

		const data = {
			name: form.name.value,
			email: form.email.value,
			phone: form.phone.value,
			jobTitle: jobRole,
		};

		const formData = new FormData();
		formData.append("data", JSON.stringify(data));
		formData.append("resume", resume);

		try {
			setLoading(true);
			await applyJob(jobId, formData);

			toast.success("Application submitted successfully!");
			navigate("/findJobs");
		} catch (error) {
			console.error(error);
			toast.error("Failed to submit application");
		} finally {
			setLoading(false);
		}
	};
	return (
		<div className=" px-6 py-6 max-w-4xl mx-auto min-h-screen">
			<h1 className="flex justify-center text-3xl font-bold mb-4">
				Apply <span className="text-orange-500">Job</span>
			</h1>
			<div className="">
				<form className=" space-y-4">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div>
							<label className="text-lg font-bold text-gray-800">Job Id</label>
							<input
								value={jobId}
								readOnly
								type="number"
								name="jobId"
								className="w-full bg-orange-50 border border-orange-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
							/>
						</div>
						<div>
							<label className="text-lg font-bold text-gray-800">
								Job Role
							</label>
							<input
								value={jobRole}
								readOnly
								type="text"
								name="jobTitle"
								className="w-full bg-orange-50 border border-orange-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
							/>
						</div>
					</div>
				</form>
			</div>
			<form onSubmit={handleSubmit} className="flex-1 space-y-4">
				{/* Resume Upload */}
				<div>
					<label className="text-sm font-medium text-gray-800">Resume</label>
					<div className="mt-2 flex items-center gap-3">
						<button
							onClick={() => fileInputRef.current.click()}
							type="button"
							className="flex items-center gap-2 bg-orange-500 hover:brightness-95 text-white px-4 py-2 rounded-md">
							<img src={assets.upload} alt="upload" className="w-5 h-5" />
							Upload Resume
						</button>

						<span className="text-sm text-gray-600">
							{" "}
							{resume ? resume.name : "No File chosen"}
						</span>

						<input
							ref={fileInputRef}
							onChange={handleFileChange}
							type="file"
							accept=".pdf,.doc,.docx"
							className="hidden"
						/>
					</div>
					<p className="text-xs text-gray-400 mt-1">
						Accepted: .pdf,.doc,.docx — Max 5MB
					</p>
					<input type="file" accept=".pdf" className="hidden" />
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					<div>
						<label className="text-sm font-medium text-gray-800">
							Full Name
						</label>
						<input
							required
							name="name"
							type="text"
							placeholder="Full Name"
							className="w-full border border-orange-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
						/>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div>
						<label className="text-sm font-medium text-gray-800">E-mail</label>
						<input
							required
							name="email"
							type="email"
							placeholder="yourEmail@gmail.com"
							className="w-full border border-orange-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
						/>
					</div>

					<div>
						<label className="text-sm font-medium text-gray-800">
							Phone Number
						</label>
						<input
							required
							name="phone"
							type="tel"
							placeholder="+91 xxxxxxxxxx"
							className="w-full border border-orange-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
						/>
					</div>
				</div>

				{/* Submit */}
				<div className="pt-2 ">
					<button
						disabled={loading}
						type="submit"
						className="w-full bg-orange-500 hover:brightness-95 text-white px-6 py-2 rounded-md font-semibold">
						{loading ? "Submitting..." : "Submit Application"}
					</button>
				</div>
			</form>
		</div>
	);
};

export default ApplyJob;
