import axios from "axios";

export const applyJob = async (jobId, formData) => {
	return await axios.post(
		`http://localhost:8080/api/v1.0/applicants/apply/${jobId}`,
		formData,
		{
			headers: {
				"Content-Type": "multipart/form-data",
			},
		}
	);
};

export const getJobApllication = async () => {
	return await axios.get("http://localhost:8080/api/v1.0/applicants");
};

export const deleteApplication = async (jobId) => {
	return await axios.delete(
		`http://localhost:8080/api/v1.0/applicants/apply/${jobId}`,
		jobId
	);
};
