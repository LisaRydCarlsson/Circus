// import "../styling/Header.scss";
// import React from "react";
// import { NavLink, Link } from "react-router-dom";

// const Header = () => {
// 	return (
// 		<header className="header">
// 			<nav className="header__nav">
// 				<div className="header__links">
// 					<NavLink
// 						to="/attractions"
// 						className="header__links--small"
// 						activeClassName="active"
// 					>
// 						ATTRACTIONS
// 					</NavLink>
// 					<NavLink
// 						to="/casino"
// 						className="header__links--small"
// 						activeClassName="active"
// 					>
// 						CASINO
// 					</NavLink>
// 					<NavLink
// 						to="/shows"
// 						className="header__links--small"
// 						activeClassName="active"
// 					>
// 						SHOWS
// 					</NavLink>
// 				</div>
// 				<Link to="/home" className="leader__links--large">
// 					<h5>welcome to the</h5>
// 					<h4>CircuS</h4>
// 				</Link>
// 				<div className="header__links">
// 					<NavLink
// 						to="/food-drink"
// 						className="header__links--small"
// 						activeClassName="active"
// 					>
// 						FOOD & DRINK
// 					</NavLink>
// 					<NavLink
// 						to="/info"
// 						className="header__links--small"
// 						activeClassName="active"
// 					>
// 						INFO
// 					</NavLink>
// 					<NavLink
// 						to="/order"
// 						className="header__links--small"
// 						activeClassName="active"
// 					>
// 						TICKETS
// 					</NavLink>
// 				</div>
// 			</nav>
// 		</header>
// 	);
// };

// export default Header;

import "../styling/Header.scss";
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="header">
			<nav className="header__nav">
				<div className="header__nav--left">
					<NavLink to="/attractions" activeClassName="active">
						ATTRACTIONS
					</NavLink>
					<NavLink to="/casino" activeClassName="active">
						CASINO
					</NavLink>
					<NavLink to="/shows" activeClassName="active">
						SHOWS
					</NavLink>
				</div>
				<div className="header__nav--center">
					<Link to="/home">
						<h5>welcome to the</h5>
						<h4>CircuS</h4>
					</Link>
				</div>
				<div className="header__nav--right">
					<NavLink to="/food-drink" activeClassName="active">
						FOOD & DRINK
					</NavLink>
					<NavLink to="/info" activeClassName="active">
						INFO
					</NavLink>
					<NavLink to="/order" activeClassName="active">
						TICKETS
					</NavLink>
				</div>
			</nav>
		</header>
	);
};

export default Header;

// import "../styling/Header.scss";
// import React, { useState } from "react";
// import { NavLink, Link } from "react-router-dom";

// const Header = () => {
// 	const [showLinks, setShowLinks] = useState(false);

// 	const toggleLinks = () => {
// 		setShowLinks(!showLinks);
// 	};

// 	return (
// 		<header className="header">
// 			<nav className="header__nav">
// 				<button onClick={toggleLinks} className="menu-button">
// 					MENU
// 				</button>
// 				<Link to="/home" className="leader__links--large">
// 					<h5>welcome to the</h5>
// 					<h4>CircuS</h4>
// 				</Link>
// 				{showLinks && (
// 					<>
// 						<div className="header__links--left">
// 							<NavLink
// 								to="/attractions"
// 								className="header__links--small"
// 								activeClassName="active"
// 							>
// 								ATTRACTIONS
// 							</NavLink>
// 							<NavLink
// 								to="/casino"
// 								className="header__links--small"
// 								activeClassName="active"
// 							>
// 								CASINO
// 							</NavLink>
// 							<NavLink
// 								to="/shows"
// 								className="header__links--small"
// 								activeClassName="active"
// 							>
// 								SHOWS
// 							</NavLink>
// 						</div>
// 						<div className="header__links--right">
// 							<NavLink
// 								to="/food-drink"
// 								className="header__links--small"
// 								activeClassName="active"
// 							>
// 								FOOD & DRINK
// 							</NavLink>
// 							<NavLink
// 								to="/info"
// 								className="header__links--small"
// 								activeClassName="active"
// 							>
// 								INFO
// 							</NavLink>
// 							<NavLink
// 								to="/order"
// 								className="header__links--small"
// 								activeClassName="active"
// 							>
// 								TICKETS
// 							</NavLink>
// 						</div>
// 					</>
// 				)}
// 			</nav>
// 		</header>
// 	);
// };

// export default Header;
