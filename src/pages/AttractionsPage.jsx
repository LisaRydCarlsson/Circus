import "../styling/AttractionsPage.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReadMore from "../components/ReadMore";
import HeaderImg from "../assets/img/attractions-header.jpg";
import Carousel from "../assets/img/attractions-whirling-wonder.jpg";
import RollerCoaster from "../assets/img/attractions-iron-cyclone.jpg";
import Steamboat from "../assets/img/attractions-steamboat-rumble.jpg";
import BumperCars from "../assets/img/attractions-bumper-blast.jpg";
import FerrisWheel from "../assets/img/attractions-skyline-spinner.jpg";
import LoopRollerCoaster from "../assets/img/attractions-inferno-spiral.jpg";

const AttractionsPage = () => {
	const [selectedImage, setSelectedImage] = useState(null);

	return (
		<main className="scrollable-content">
			<div className="attractions">
				<Header />
				<div className="attractions__header-container">
					<img src={HeaderImg} alt="Vintage Carousel" />
					<h3>AttractionS</h3>
				</div>
				<div className="attractions__square-container">
					<div className="attractions__square">
						<div className="attractions__square__content">
							<div className="image-container">
								<motion.img
									src={Carousel}
									alt="Whirling Wonder Carousel"
									layoutId={Carousel}
									onClick={() => setSelectedImage(Carousel)}
								/>
							</div>
							<h6>whirling wonder</h6>
						</div>
					</div>
					<div className="attractions__square">
						<div className="attractions__square__content">
							<div className="image-container">
								<motion.img
									src={RollerCoaster}
									alt="Iron Cyclone Roller Coaster"
									layoutId={RollerCoaster}
									onClick={() => setSelectedImage(RollerCoaster)}
								/>
							</div>
							<h6>iron cyclone</h6>
						</div>
					</div>
					<div className="attractions__square">
						<div className="attractions__square__content">
							<div className="image-container">
								<motion.img
									src={Steamboat}
									alt="Steamboat Rumble"
									layoutId={Steamboat}
									onClick={() => setSelectedImage(Steamboat)}
								/>
							</div>
							<h6>steamboat rumble</h6>
						</div>
					</div>
					<div className="attractions__square">
						<div className="attractions__square__content">
							<div className="image-container">
								<motion.img
									src={LoopRollerCoaster}
									alt="Inferno Spiral"
									layoutId={LoopRollerCoaster}
									onClick={() => setSelectedImage(LoopRollerCoaster)}
								/>
							</div>
							<h6>inferno spiral</h6>
						</div>
					</div>
					<div className="attractions__square">
						<div className="attractions__square__content">
							<div className="image-container">
								<motion.img
									src={BumperCars}
									alt="Bumber Blast"
									layoutId={BumperCars}
									onClick={() => setSelectedImage(BumperCars)}
								/>
							</div>
							<h6>bumper blast</h6>
						</div>
					</div>
					<div className="attractions__square">
						<div className="attractions__square__content">
							<div className="image-container">
								<motion.img
									src={FerrisWheel}
									alt="Skyline Spinner"
									layoutId={FerrisWheel}
									onClick={() => setSelectedImage(FerrisWheel)}
								/>
							</div>
							<h6>skyline spinner</h6>
						</div>
					</div>
				</div>
				<div className="line"></div>
				<div className="attractions__kids-carnival">
					<div className="attractions__kids-carnival__img-container">
						<h3>Kids carnival lanD</h3>
						<h5>magical moments await!</h5>
					</div>
					<div className="attractions__kids-carnival__text-container">
						<p>
							Step into the enchanting world of our Kid's Carnival Wonderland!
							Delight in whimsical rides, captivating shows, and exciting games
							designed just for the little ones. From sweet treats to joyous
							laughter, every corner is a haven of childlike wonder. Bring the
							whole family and create cherished memories together.
						</p>
						<button className="glow-btn">Join the fun</button>
					</div>
				</div>
				<div className="line"></div>
				<div className="attractions__freight-fest">
					<div className="attractions__freight-fest__img-container">
						<h5>experience the thrilling</h5>
						<h3>Freigt fesT</h3>
					</div>
					<div className="attractions__freight-fest__text-container">
						<p>
							Step into the heart of Fright Fest, a realm of spine-tingling
							adventures! Test your courage in Nightmare Manor's chilling
							depths, ascend the ominous Terror Towers, and navigate the eerie
							passages of Chill Chambers. Explore Spooky Sanctuaries and venture
							into the Haunted Woods for an unforgettable, pulse-pounding
							journey through the macabre!
						</p>
						<ReadMore hideOnAllDevices>
							<p>
								Explore Spooky Sanctuaries and venture into the Haunted Woods
								for an unforgettable, pulse-pounding journey through the
								macabre!
							</p>
						</ReadMore>
						<button className="glow-btn">Face your fears</button>
					</div>
				</div>
				<div className="line"></div>
				<div className="events__book-ticket">
					<h6>BOOK YOUR TICKET HERE</h6>
					<button className="glow-btn">Select date</button>
					<button className="glow-btn">Buy your ticket</button>
				</div>
				<Link to="/home">
					<button className="glow-btn back-btn">Back to Home</button>
				</Link>
				<AnimatePresence>
					{selectedImage && (
						<SingleImage
							src={selectedImage}
							setSelectedImage={setSelectedImage}
						/>
					)}
				</AnimatePresence>
			</div>
			<Footer />
		</main>
	);
};

function SingleImage({ src, setSelectedImage }) {
	return (
		<motion.div
			className="single-image-container"
			onClick={() => setSelectedImage(null)}
		>
			<motion.img src={src} layoutId={src} />
		</motion.div>
	);
}

export default AttractionsPage;
