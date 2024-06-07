import "../styling/general.scss";
import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const ShowsPage = () => {
	return (
		<main>
			<Header />
			<div className="construction-page">
				<p>This page is under construction.</p>
				<p>We will be right back with exciting news in a short while.</p>
				<span className="space"></span>
				<Link to="/home">
					<button className="glow-btn">Back to Home</button>
				</Link>
				<span className="space"></span>
			</div>
			<Footer />
		</main>
	);
};

export default ShowsPage;
