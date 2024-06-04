import "../styling/Marquee.scss";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const Marquee = () => {
	const marqueeRef = useRef();
	const [textWidth, setTextWidth] = useState(0);

	useEffect(() => {
		setTextWidth(marqueeRef.current.offsetWidth);
	}, []);

	const marqueeVariants = {
		animate: {
			x: [0, -textWidth],
			transition: {
				x: {
					repeat: Infinity,
					repeatType: "loop",
					duration: 25,
					ease: "linear",
				},
			},
		},
	};

	return (
		<div className="marquee">
			<motion.div
				className="marquee__content"
				variants={marqueeVariants}
				animate="animate"
			>
				<span ref={marqueeRef} className="marquee__span">
					OPENING HOURS <span className="row-space"></span>|{" "}
					<span className="row-space"></span>MONDAY - FRIDAY:{" "}
					<span className="row-space"></span>10:00 AM - 10:00 PM
					<span className="row-space"></span> |{" "}
					<span className="row-space"></span>SATURDAY - SUNDAY:{" "}
					<span className="row-space"></span>10:00 AM - 12:00 AM
					<span className="row-space"></span> |{" "}
					<span className="row-space"></span>
				</span>
				<span className="marquee__span">
					OPENING HOURS <span className="row-space"></span>|{" "}
					<span className="row-space"></span>MONDAY - FRIDAY:{" "}
					<span className="row-space"></span>10:00 AM - 10:00 PM
					<span className="row-space"></span> |{" "}
					<span className="row-space"></span>SATURDAY - SUNDAY:{" "}
					<span className="row-space"></span>10:00 AM - 12:00 AM
					<span className="row-space"></span> |{" "}
					<span className="row-space"></span>
				</span>
			</motion.div>
		</div>
	);
};

export default Marquee;
