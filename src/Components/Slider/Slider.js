import React from "react";
import Carousel from "./Carousel";

const Slider = () =>{
	return(
		<div style={{ position: "relative"}}>
		<Carousel />
			<div className="event_name">
				<div className="wrapper">
					My Top-3 Books
				</div>
			</div>
		</div>
	)
}

export default Slider;
