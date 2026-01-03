import axios from "axios";

export const applyJob = async (jobId, formData) => {
	return await axios.post(
		`http://localhost:8080/api/v1.0/applicants/apply/${jobId}`,
		formData,
		{
			headers: {
				"Content-Type": "multipart/form-data",
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		}
	);
};

export const getJobApplication = async () => {
	return await axios.get("http://localhost:8080/api/v1.0/applicants", {
		headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
	});
};

export const deleteApplication = async (applicationId) => {
	return await axios.delete(
		`http://localhost:8080/api/v1.0/applicants/${applicationId}`,
		{ headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
	);
};
