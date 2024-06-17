import "../styling/Carousel.scss";
import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselComponent = ({ images, index, handleSelect }) => (
	<Carousel
		activeIndex={index}
		onSelect={handleSelect}
		interval={2500}
		fade
		className="events__carousel-container"
	>
		{images.map((image, idx) => (
			<Carousel.Item key={idx}>
				<img
					className="d-block w-100 events__carousel-image"
					src={image}
					alt={`Slide ${idx}`}
				/>
			</Carousel.Item>
		))}
	</Carousel>
);

export default CarouselComponent;
