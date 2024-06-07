import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import EventsPage from "./pages/EventsPage.jsx";
import AttractionsPage from "./pages/AttractionsPage.jsx";
import CasinoPage from "./pages/CasinoPage.jsx";
import ShowsPage from "./pages/ShowsPage.jsx";
import FoodDrinkPage from "./pages/FoodDrinkPage.jsx";
import InfoPage from "./pages/InfoPage.jsx";
import OrderPage from "./pages/OrderPage.jsx";
import WelcomePage from "./pages/WelcomePage.jsx";

function AppRoutes() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<WelcomePage />} />
				<Route path="/home" element={<HomePage />} />
				<Route path="/events" element={<EventsPage />} />
				<Route path="/attractions" element={<AttractionsPage />} />
				<Route path="/casino" element={<CasinoPage />} />
				<Route path="/shows" element={<ShowsPage />} />
				<Route path="/food-drink" element={<FoodDrinkPage />} />
				<Route path="/info" element={<InfoPage />} />
				<Route path="/order" element={<OrderPage />} />
			</Routes>
		</Router>
	);
}

export default AppRoutes;
