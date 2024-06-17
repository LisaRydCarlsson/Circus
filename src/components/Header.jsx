import "../styling/Header.scss";
import React, { useEffect, useState, useMemo } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
	const location = useLocation();
	const [shouldAnimate, setShouldAnimate] = useState(
		location.pathname === "/home"
	);

	useEffect(() => {
		setShouldAnimate(location.pathname === "/home");
	}, [location.pathname]);

	const variants = useMemo(
		() => ({
			hidden: {
				opacity: 0,
				y: -100,
				transition: { duration: 2, ease: "easeOut" },
			},
			visible: {
				opacity: 1,
				y: 0,
				transition: { duration: 2, ease: "easeOut" },
			},
		}),
		[]
	);

	return (
		<header className="header">
			<nav className="header__nav">
				<motion.div
					className="header__nav--left"
					initial={shouldAnimate ? "hidden" : "visible"}
					animate={shouldAnimate ? "visible" : "visible"}
					variants={variants}
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
				</motion.div>
				<div className="header__nav--center">
					<Link to="/home">
						<h5>welcome to the</h5>
						<h4>CircuS</h4>
					</Link>
				</div>
				<motion.div
					className="header__nav--right"
					initial={shouldAnimate ? "hidden" : "visible"}
					animate={shouldAnimate ? "visible" : "visible"}
					variants={variants}
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
				</motion.div>
			</nav>
		</header>
	);
};

export default Header;
