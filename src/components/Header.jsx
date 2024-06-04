import "../styling/Header.scss";
import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="header">
			<nav className="header__nav">
				<div className="header__links">
					<NavLink
						to="/attractions"
						className="header__links--small"
						activeClassName="active"
					>
						ATTRACTIONS
					</NavLink>
					<NavLink
						to="/games"
						className="header__links--small"
						activeClassName="active"
					>
						GAMES
					</NavLink>
					<NavLink
						to="/shows"
						className="header__links--small"
						activeClassName="active"
					>
						SHOWS
					</NavLink>
				</div>
				<Link to="/home" className="leader__links--large">
					<h5>welcome to the</h5>
					<h4>CircuS</h4>
				</Link>
				<div className="header__links">
					<NavLink
						to="/food-drink"
						className="header__links--small"
						activeClassName="active"
					>
						FOOD & DRINK
					</NavLink>
					<NavLink
						to="/info"
						className="header__links--small"
						activeClassName="active"
					>
						INFO
					</NavLink>
					<NavLink
						to="/order"
						className="header__links--small"
						activeClassName="active"
					>
						TICKETS
					</NavLink>
				</div>
			</nav>
		</header>
	);
};

export default Header;
