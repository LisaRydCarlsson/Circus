import "../styling/HomePage.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import ReadMore from "../components/ReadMore";
import CarouselComponent from "../components/Carousel";
import Marquee from "../components/Marquee";
import carouselMask from "../assets/img/events-carousel-mask.jpg";
import carouselCarousel from "../assets/img/events-carousel-carousel.jpg";
import carouselCar from "../assets/img/events-carousel-car.jpg";
import carouselShow from "../assets/img/events-carousel-show.jpg";
import carouselShow2 from "../assets/img/events-carousel-show2.jpg";
import kidsImg1 from "../assets/img/events-kids-01.png";
import kidsImg2 from "../assets/img/events-kids-02.png";
import kidsImg3 from "../assets/img/events-kids-03.png";
import restImg1 from "../assets/img/events-restaurant-01.jpg";
import restImg2 from "../assets/img/events-restaurant-02.jpg";
import restImg3 from "../assets/img/events-restaurant-03.jpg";
import restImg4 from "../assets/img/events-restaurant-04.jpg";

const HomePage = () => {
	const images = [
		carouselMask,
		carouselCarousel,
		carouselShow2,
		carouselCar,
		carouselShow,
	];
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<main className="scrollable-content">
			<div className="events">
				<Header />
				<CarouselComponent
					images={images}
					index={index}
					handleSelect={handleSelect}
				/>
				<Marquee />
				<div className="events__book-ticket">
					<h5>BOOK YOUR TICKET HERE</h5>
					<button className="glow-btn">Select date</button>
					<button className="glow-btn">Buy your ticket</button>
				</div>
				<div className="events__kids">
					<h3>Kids carnival lanD</h3>
					<div className="events__kids__img-container">
						<img src={kidsImg1} alt="Kids Carnival Land" />
						<img src={kidsImg2} alt="Kids Carnival Land" />
						<img src={kidsImg3} alt="Kids Carnival Land" />
					</div>
					<p>
						Step into the enchanting world of our Kid's Carnival Wonderland!
						Delight in whimsical rides, captivating shows, and exciting games
						designed just for the little ones.
					</p>
					<ReadMore hideOnAllDevices>
						<p>
							From sweet treats to joyous laughter, every corner is a haven of
							childlike wonder. Bring the whole family and create cherished
							memories together.
						</p>
					</ReadMore>
					<button className="glow-btn">Join the fun</button>
				</div>
				<div className="line"></div>
				<div className="events__casino">
					<div className="events__casino__img-container">
						<h3>Game oN</h3>
						<h5>thrills, chills and prices await!</h5>
					</div>
					<div className="events__casino__text-container">
						<p>
							Immerse yourself in a world of excitement at our Game Haven!
							Whether you're a fan of classic casino games or prefer carnival
							game favorites like ring toss, balloon darts, and hoopla, luck and
							skill collide for an unforgettable experience.
						</p>
						<ReadMore hideOnAllDevices>
							<p>
								Win fantastic prizes, share laughter with friends, and savor the
								joy of every game. The fun never stops in our thrilling game
								paradise.
							</p>
						</ReadMore>
						<button className="glow-btn">Try your luck</button>
					</div>
				</div>
				<div className="line"></div>
				<div className="events__show">
					<div className="events__show__img-container">
						<h5>unleash the magic in our</h5>
						<h3>Spectacular showS</h3>
					</div>
					<div className="events__show__text-container">
						<p>
							Experience unforgettable entertainment at our park. From dazzling
							spectacles to interactive performances, every show promises joy,
							laughter, and amazement. Join us for a celebration of talent and
							creativity, where the stage comes alive with wonder.
						</p>
						<button className="glow-btn">Explore the shows</button>
					</div>
				</div>
				<div className="line"></div>
				<div className="events__restaurants">
					<div className="events__restaurants__text">
						<h3>Savor the flavorS</h3>
						<h5>your culinary adventure awaits</h5>
						<p>
							Indulge your taste buds in a gastronomic journey through our park.
							From savory treats to sweet delights, our food stalls and
							restaurants offer a feast for every palate. Discover a world of
							flavors that will leave you craving for more.
						</p>
					</div>
					<div className="events__restaurants__img-square">
						<img src={restImg1} alt="La Luna Restaurant" />
						<img src={restImg2} alt="Infinty Restaurant" />
						<img src={restImg3} alt="Family Style Restaurant" />
						<img src={restImg4} alt="Appertivo Restaurant" />
					</div>
					<button className="glow-btn">Discover all</button>
				</div>
				<div className="line"></div>
				<div className="events__freight-fest">
					<div className="events__freight-fest__img-container">
						<h5>experience the thrilling</h5>
						<h3>Freigt fesT</h3>
					</div>
					<div className="events__freight-fest__text-container">
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
					<h5>BOOK YOUR TICKET HERE</h5>
					<button className="glow-btn">Select date</button>
					<button className="glow-btn">Buy your ticket</button>
				</div>
			</div>
			<div className="space"></div>
		</main>
	);
};

export default HomePage;
