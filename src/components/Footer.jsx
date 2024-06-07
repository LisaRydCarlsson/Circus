import "../styling/Footer.scss";
import React, { useState } from "react";

const Footer = () => {
	return (
		<main>
			<div className="footer-line"></div>
			<div className="footer">
				<div className="footer__left">
					<p className="footer__text">About the Circus</p>
					<p className="footer__text">Opening Hours & Program</p>
					<p className="footer__text">Directions & Accessibility</p>
					<p className="footer__text">Attractions & Rides</p>
					<p className="footer__text">Restaurants & Reservations</p>
				</div>
				<div className="footer__center">
					<p className="footer__text">Tickets & Annual Passes</p>
					<p className="footer__text">Group Bookings & Meetings</p>
					<p className="footer__text">Help & Guest Services</p>
					<p className="footer__text">Guest Safety & Park Security</p>
					<p className="footer__text">Lost & Found</p>
				</div>
				<div className="footer__right">
					<p className="footer__text">Sustainability</p>
					<p className="footer__text">Privacy Policy</p>
					<p className="footer__text">Terms & Conditions</p>
					<p className="footer__text">Careers & Media Inquiries</p>
					<p className="footer__text">Contact us</p>
				</div>
			</div>
			<div className="footer__centered-text">
				<p>&copy; 2024 The Circus. All rights reserved.</p>
			</div>
		</main>
	);
};

export default Footer;
