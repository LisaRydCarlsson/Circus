import React, { useState, useEffect } from "react";

function ReadMore({ children, hideOnAllDevices }) {
	const [isHidden, setIsHidden] = useState(window.innerWidth <= 768);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const toggleHidden = () => {
		if (hideOnAllDevices || windowWidth <= 768) {
			setIsHidden(!isHidden);
		}
	};

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
			if (window.innerWidth > 768 && !hideOnAllDevices) {
				setIsHidden(false);
			} else {
				setIsHidden(true);
			}
		};

		window.addEventListener("resize", handleResize);
		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, [hideOnAllDevices]);

	return (
		<div className="read-more">
			<span
				className="read-more__link"
				onClick={toggleHidden}
				style={{
					display: windowWidth > 768 && !hideOnAllDevices ? "none" : "inline",
				}}
			>
				{isHidden ? "Read more" : "Show less"}
			</span>
			<div className={`read-more__content ${!isHidden ? "expanded" : ""}`}>
				{children}
			</div>
		</div>
	);
}

export default ReadMore;
