import "../styling/Header.scss";
import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

const Header = () => {
	const location = useLocation();
	const [shouldAnimate, setShouldAnimate] = useState(false);
	const [isHome, setIsHome] = useState(location.pathname === "/home");

	useEffect(() => {
		if (location.pathname === "/home") {
			setShouldAnimate(true);
			setIsHome(true);
		} else {
			setShouldAnimate(false);
			setIsHome(false);
		}
	}, [location]);

	return (
		<header className="header">
			<nav className="header__nav">
				<div
					className={`header__nav--left ${
						shouldAnimate ? "animate" : "visible"
					}`}
				>
					<NavLink
						to="/attractions"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						ATTRACTIONS
					</NavLink>
					<NavLink
						to="/casino"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						CASINO
					</NavLink>
					<NavLink
						to="/shows"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						SHOWS
					</NavLink>
				</div>
				<div className="header__nav--center">
					<Link to="/home">
						<h5>welcome to the</h5>
						<h4>CircuS</h4>
					</Link>
				</div>
				<div
					className={`header__nav--right ${
						shouldAnimate ? "animate" : "visible"
					}`}
				>
					<NavLink
						to="/food-drink"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						FOOD & DRINK
					</NavLink>
					<NavLink
						to="/info"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						INFO
					</NavLink>
					<NavLink
						to="/order"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						TICKETS
					</NavLink>
				</div>
			</nav>
		</header>
	);
};

export default Header;
