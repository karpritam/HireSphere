import React, { useEffect, useState } from "react";
import { getAllJobs } from "../../../Service/JobService";
import ManageJobs from "./ManageJobs";

const ManageJobPage = () => {
	const [jobs, setJobs] = useState([]);

	useEffect(() => {
		loadJobs();
	}, []);

	const loadJobs = async () => {
		try {
			const response = await getAllJobs();
			setJobs(response.data);
		} catch (err) {
			console.error("Error fetching jobs:", err);
		}
	};

	return (
		<div>
			<ManageJobs jobs={jobs} />
		</div>
	);
};

export default ManageJobPage;
