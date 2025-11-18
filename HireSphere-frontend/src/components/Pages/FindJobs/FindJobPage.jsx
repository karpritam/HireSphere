import React, { useEffect, useState } from "react";
import FindJobs from "./FindJobs"; 
import { getAllJobs } from "../../../Service/JobService";

const FindJobsPage = () => {
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
      <FindJobs jobs={jobs} />
    </div>
  );
};

export default FindJobsPage;
