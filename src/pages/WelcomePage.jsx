import "../styling/WelcomePage.scss";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import anime from "animejs";
import soundFile1 from "../assets/sounds/wind-in-town.mp3";
import soundFile2 from "../assets/sounds/supernatural-explosion.mp3";
import soundFile3 from "../assets/sounds/circus-music.m4a";

const audio1 = new Audio(soundFile1);
const audio2 = new Audio(soundFile2);
const audio3 = new Audio(soundFile3);

const WelcomePage = () => {
	const enterSectionRef = useRef(null);
	const welcomeSectionRef = useRef(null);
	const btnRef = useRef(null);

	useEffect(() => {
		let enterSection = enterSectionRef.current;
		let welcomeSection = welcomeSectionRef.current;
		let btn = btnRef.current;

		if (enterSection && welcomeSection && btn) {
			// Sätt initiala värden för translateY och scale på #enter
			enterSection.style.transform = "translateY(-50px) scale(1)";
			welcomeSection.style.opacity = 0;

			// Animering: Visa bakgrundsbilden
			anime({
				targets: enterSection,
				opacity: [1, 1],
				duration: 1000,
				easing: "linear",
				begin: () => {
					audio1.play();
				},
				complete: () => {
					// Animeringseffekt för inmatning (sugas in)
					anime({
						targets: enterSection,
						opacity: [1, 0],
						easing: "linear",
						scale: {
							value: 2.7,
							duration: 9000,
							easing: "easeInQuad",
						},
						duration: 9000,
						complete: () => {
							// Fördröj återställning av scale efter att bakgrunden är borta
							setTimeout(() => {
								// Återställ scale på #enter till 1
								anime({
									targets: enterSection,
									scale: 1,
									duration: 1000,
									easing: "easeOutElastic",
								});
							}, 1000); // Ta bort?

							// Slutsteg - Visa #welcome-sektionen med "bang"-effekten
							anime({
								targets: welcomeSection,
								opacity: 1,
								scale: 0.8,
								duration: 500,
								easing: "easeOutElastic",
								begin: () => {
									audio2.play();
								},
								complete: () => {
									anime({
										targets: btn,
										opacity: 1,
										translateY: ["1000rem", "0%"],
										duration: 1000,
										easing: "linear",
										begin: () => {
											audio3.play();
										},
									});
								},
							});
						},
					});
				},
			});
		} else {
			console.log("#enter or #welcome element not found");
		}

		btn.addEventListener("mouseover", function () {
			btn.querySelector(".button-text").textContent = "IF YOU DARE";
		});

		btn.addEventListener("mouseout", function () {
			btn.querySelector(".button-text").textContent = "STEP INSIDE";
		});
	}, []);

	return (
		<section className="home-container">
			<div id="enter" ref={enterSectionRef}></div>
			<div id="welcome" ref={welcomeSectionRef}>
				<h2>welcome to the</h2>
				<h1>CircuS</h1>
				<div id="enter-btn" ref={btnRef} className="button-container">
					<Link to="/home" className="button-link">
						<div className="button-background"></div>
						<span className="button-text">STEP INSIDE</span>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default WelcomePage;
