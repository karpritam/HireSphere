import axios from "axios";

//PostMapping
export const createJob = async (jobs) => {
	return await axios.post("http://localhost:8080/api/v1.0/jobs", jobs);
};

//DeleteMapping
export const deleteJob = async (jobId) => {
	return await axios.delete(`http://localhost:8080/api/v1.0/jobs/${jobId}`);
};

//GetMapping
export const getAllJobs = async () => {
	return await axios.get("http://localhost:8080/api/v1.0/jobs");
};

//GetMapping by Id
export const getJobById = async (jobId) => {
	return await axios.get(`http://localhost:8080/api/v1.0/jobs/${jobId}`);
};

//UpdateMapping
export const updateJob = async (jobId) => {
	return await axios.put(`http://localhost:8080/api/v1.0/jobs/${jobId}`);
};
