import React, { useEffect, useState } from "react";
import {
	deleteApplication,
	getJobApplication,
} from "../../../Service/ApplicantService";
import { assets } from "../../../assets/assets";

const ViewApplications = () => {
	const [applications, setApplications] = useState([]);

	useEffect(() => {
		loadApplications();
	}, []);

	const loadApplications = async () => {
		try {
			const res = await getJobApplication();
			setApplications(res.data);
		} catch (err) {
			console.error("Failed to fetch applications", err);
		}
	};
	const handleDelete = async (id) => {
		if (!window.confirm("Are you sure you want to delete this application?"))
			return;

		try {
			await deleteApplication(id);
			toast.success("Application deleted successfully");
			setApplications((prev) => prev.filter((app) => app.id !== id));
		} catch (err) {
			console.error("Delete failed", err);
			toast.error("Failed to delete application");
		}
	};

	return (
		<div className="max-w-4xl mx-auto min-h-screen px-6 py-8">
			{/* Header */}
			<h1 className="text-3xl font-bold mb-1">
				Applicants for{" "}
				<span className="text-orange-500">
					{applications[0]?.jobTitle || "Job"}
				</span>
			</h1>

			<p className="text-gray-500 mb-6">
				Total Applicants: {applications.length}
			</p>
			{applications.length === 0 && (
				<p className="text-gray-400 text-center mt-10">
					No applications found.
				</p>
			)}

			{/* Applicant Cards */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{applications.map((app) => (
					<div
						key={app.id}
						className="bg-orange-100 rounded-xl shadow-md p-5 border hover:shadow-lg transition">
						{/* Top */}
						<div className="flex items-center gap-4">
							<div className="w-12 h-12 rounded-full bg-orange-400 text-white flex items-center justify-center font-bold">
								{app.name.charAt(0)}
							</div>

							<div>
								<h3 className="font-semibold text-lg">{app.name}</h3>
								<p className="text-sm text-gray-600">{app.email}</p>
								<p className="text-sm text-gray-600">{app.mobile}</p>
							</div>
						</div>

						{/* Bottom */}
						<div className="flex items-center  mt-4">
							
							<img src={assets.upload} className="w-8 h-8" />
							<a
							
								href={app.resumeUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="text-orange-500 text-sm font-medium hover:underline">
								View Resume
							</a>
						</div>

						<p className="text-xs text-gray-700 mt-3">
							Applied on: {new Date(app.createdAt).toLocaleDateString()}
						</p>
						<div className="flex justify-evenly gap-2 mt-5">
							<button className="px-3 py-3 w-full bg-green-500 text-white rounded-md text-sm hover:bg-green-600">
								Accept
							</button>
							<button
								onClick={() => handleDelete(app.id)}
								className="px-3 py-3 w-full bg-red-500 text-white rounded-md text-sm hover:bg-red-600">
								Reject
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ViewApplications;
