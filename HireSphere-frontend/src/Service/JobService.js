import axios from "axios";

//PostMapping
export const createJob = async (jobs) => {
	return await axios.post("http://localhost:8080/api/v1.0/jobs", jobs, {
		headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
	});
};

//DeleteMapping
export const deleteJob = async (jobId) => {
	return await axios.delete(`http://localhost:8080/api/v1.0/jobs/${jobId}`, {
		headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
	});
};

//GetMapping
export const getAllJobs = async () => {
	return await axios.get("http://localhost:8080/api/v1.0/jobs");
};

//GetMapping by Id
export const getJobById = async (jobId, jobData) => {
	return await axios.get(
		`http://localhost:8080/api/v1.0/jobs/${jobId}`,
		jobData
	);
};

//UpdateMapping
export const updateJob = async (jobId, jobData) => {
	return await axios.put(
		`http://localhost:8080/api/v1.0/jobs/${jobId}`,
		jobData,
		{ headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
	);
};
