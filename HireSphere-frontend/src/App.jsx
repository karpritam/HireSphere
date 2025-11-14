import React from "react";
import Menubar from "./components/MenuBar/Menubar";
import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./components/Pages/HomePage/Homepage";
import FindJobs from "./components/Pages/FindJobs/FindJobs";
import FindTalent from "./components/Pages/FindTalend/FindTalent";
import UploadJobs from "./components/Pages/UploadJobs/UploadJobs";
import About from "./components/Pages/About/About";

const App = () => {
	const location = useLocation();
	return (
		<div className="min-h-screen bg-white text-gray-900">
			<Menubar />
			<main className="">
				<Routes>
					<Route path="/" element={<Homepage />} />        {/* Default page */}
					<Route path="/homePage" element={<Homepage />} />
					<Route path="/findJobs" element={<FindJobs />} />
					<Route path="/findTalent" element={<FindTalent />} />
					<Route path="/uploadJobs" element={<UploadJobs />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</main>
		</div>
	);
};

export default App;
