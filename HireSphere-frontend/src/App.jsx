import React from "react";
import Menubar from "./components/MenuBar/Menubar";
import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./components/Pages/HomePage/Homepage";
import FindJobs from "./components/Pages/FindJobs/FindJobs";
import UploadJobs from "./components/Pages/UploadJobs/UploadJobs";
import ViewApplications from "./components/Pages/Applications/ViewApplications";
import ManageJobs from "./components/Pages/ManageJobs/ManageJobs";
import { Toaster } from "react-hot-toast";
import FindJobsPage from "./components/Pages/FindJobs/FindJobPage";
import ManageJobPage from "./components/Pages/ManageJobs/ManageJobPage";
import UpdateJob from "./components/Pages/UpdateJob/UpdateJob";
import Apply from "./components/Pages/ApplyJob/ApplyJob";
import ApplyJob from "./components/Pages/ApplyJob/ApplyJob";
import Footer from "./components/Pages/Footer/Footer";

const App = () => {
	const location = useLocation();
	return (
		<div className="min-h-screen bg-white text-gray-900">
			<div className="">
				<Menubar />
				{/* <Toaster position="top-center" reverseOrder={true} /> */}
				<Toaster position="top-center" reverseOrder={true} />
				<main className="">
					<Routes>
						<Route path="/" element={<Homepage />} /> {/* Default page */}
						<Route path="/homePage" element={<Homepage />} />
						<Route path="/findJobs" element={<FindJobsPage />} />
						<Route path="/uploadJobs" element={<UploadJobs />} />
						<Route path="/manageJobs" element={<ManageJobPage />} />
						<Route path="/applicants" element={<ViewApplications />} />
						<Route path="/updateJob/:id" element={<UpdateJob />} />
						<Route path="/applyJob/:id" element={<ApplyJob />} />
					</Routes>
				</main>
				<Footer/>
			</div>
		</div>
	);
};

export default App;
