import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import EventsPage from "./pages/EventsPage.jsx";
// import InfoPage from './pages/InfoPage.jsx';

function AppRoutes() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/events" element={<EventsPage />} />
				{/* <Route path="/info" element={<InfoPage />} /> */}
			</Routes>
		</Router>
	);
}

export default AppRoutes;
