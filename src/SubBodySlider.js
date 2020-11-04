import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
function SubBodySlider() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 3,
	};
	return (
		<div className="homeslider">
			<div className="subnavbar">
				<ul>
					<li>
						<a href="/">Trending</a>
					</li>
					<li>
						<a href="/">Men</a>
					</li>
					<li>
						<a href="/">Women</a>
					</li>
					<li>
						<a href="/">Kid</a>
					</li>
					<li>
						<a href="/">Nike</a>
					</li>
					<li>
						<a href="/">Sneakers</a>
					</li>
					<li>
						<a href="/">Air zoom</a>
					</li>
					<li>
						<a href="/">Jordan</a>
					</li>
					<li>
						<a href="/">Air Max</a>
					</li>
				</ul>
			</div>
			<div className="subnavbar__slider">
				<Slider {...settings}>
					<div className="slider__image">
						<img
							className="slick-image"
							src="http://pngimg.com/uploads/running_shoes/running_shoes_PNG5816.png"
							alt=""
						/>
					</div>
					<div className="slider__image">
						<img
							className="slick-image"
							src="http://pngimg.com/uploads/vans/vans_PNG35.png"
							alt=""
						/>
					</div>
					<div className="slider__image">
						<img
							className="slick-image"
							src="http://pngimg.com/uploads/running_shoes/running_shoes_PNG5785.png"
							alt=""
						/>
					</div>
					
				</Slider>
			</div>
		</div>
	);
}
export default SubBodySlider;
