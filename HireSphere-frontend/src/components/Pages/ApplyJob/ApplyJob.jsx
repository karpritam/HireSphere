import React, { useState } from "react";
import { assets } from "../../../assets/assets";

const ApplyJob = () => {
	const [loading, setLoading] = useState(false);
	return (
		<div className=" px-6 py-6 max-w-4xl mx-auto min-h-screen">
			<h1 className="flex justify-center text-3xl font-bold mb-4">
				Apply <span className="text-orange-500">Job</span>
			</h1>
			<form className="flex-1 space-y-4">
				{/* Resume Upload */}
				<div>
					<label className="text-sm font-medium text-gray-800">Resume</label>
					<div className="mt-2 flex items-center gap-3">
						<button
							type="button"
							className="flex items-center gap-2 bg-orange-500 hover:brightness-95 text-white px-4 py-2 rounded-md">
							<img src={assets.upload} alt="upload" className="w-5 h-5" />
							Upload Resume
						</button>

						<span className="text-sm text-gray-600"> "No file chosen"</span>

						<input type="file" accept=".pdf,.doc,.docx" className="hidden" />
					</div>
					<p className="text-xs text-gray-400 mt-1">Accepted: .pdf — Max 2MB</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					<div>
						<label className="text-sm font-medium text-gray-800">
							First Name
						</label>
						<input
							required
							name="firstName"
							type="text"
							placeholder="First Name"
							className="w-full border border-orange-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
						/>
					</div>

					<div>
						<label className="text-sm font-medium text-gray-800">
							Middle Name
						</label>
						<input
							name="middleName"
							type="text"
							placeholder="Middle Name"
							className="w-full border border-orange-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
						/>
					</div>

					<div>
						<label className="text-sm font-medium text-gray-800">
							Last Name
						</label>
						<input
							required
							name="lastName"
							type="text"
							placeholder="Last Name"
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
