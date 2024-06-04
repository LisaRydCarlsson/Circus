import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import HomePage from "./pages/HomePage";
import InfoPage from "./pages/InfoPage";
import AttractionsPage from "./pages/AttractionsPage";
import FoodDrinkPage from "./pages/FoodDrinkPage";
import ShowsPage from "./pages/ShowsPage";
import CasinoPage from "./pages/CasinoPage";
import OrderPage from "./pages/OrderPage";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<WelcomePage />} />
				<Route path="/info" element={<InfoPage />} />
				<Route path="/home" element={<HomePage />} />
				<Route path="/attractions" element={<AttractionsPage />} />
				<Route path="/food-drink" element={<FoodDrinkPage />} />
				<Route path="/shows" element={<ShowsPage />} />
				<Route path="/casino" element={<CasinoPage />} />
				<Route path="/order" element={<OrderPage />} />
			</Routes>
		</Router>
	);
}

export default App;
