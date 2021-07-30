import React from "react";
import Slider from "react-slick";

import slide_one from "../../resources/slider_one.png";
import slide_two from "../../resources/slider_two.png";
import slide_three from "../../resources/slider_three.png";

const Carousel = () =>{
	const settings = {
		dots: false,
		infinite: true,
		autoplay: true,
		speed: 500
	};
	return(
		<div
			className="carrousel_wrapper"
			style={{
				height: `${window.innerHeight}px`,
				overflow: "hidden"
			}}
		>
			<Slider {...settings}>
				<div>
					<div
						className="carrousel_image"
						style={{
							background: `url(${slide_one})`,
							height: `${window.innerHeight}px`
						}}
					/>
				</div>
				<div>
					<div
						className="carrousel_image"
						style={{
							background: `url(${slide_two})`,
							height: `${window.innerHeight}px`
						}}
					/>
				</div>
				<div>
					<div
						className="carrousel_image"
						style={{
							background: `url(${slide_three})`,
							height: `${window.innerHeight}px`
						}}
					/>
				</div>
			</Slider>
		</div>
	);
};
export default Carousel;
