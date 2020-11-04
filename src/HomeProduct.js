import React from "react";
import "./HomeProduct.css";
import Button from "@material-ui/core/Button";
import { AiOutlineGift } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { GiRunningShoe } from "react-icons/gi";
import { GrBike } from "react-icons/gr";
import { FaCreditCard } from "react-icons/fa";
import { MdSecurity, MdFavoriteBorder } from "react-icons/md";
function HomeProduct() {
	return (
		<div className="homeProduct">
			<div className="category__icons">
				<div className="icon__category">
					<AiOutlineGift className="icon1" />
					<span>offers</span>
				</div>
				<div className="icon__category">
					<HiOutlineShoppingCart className="icon1" />
					<span>vouchers</span>
				</div>
				<div className="icon__category">
					<FaCreditCard className="icon1" />
					<span>pay</span>
				</div>
				<div className="icon__category">
					<GrBike className="icon1" />
					<span>Delivery</span>
				</div>
				<div className="icon__category">
					<GiRunningShoe className="icon1" />
					<span>Arrivals</span>
				</div>
				<div className="icon__category">
					<MdSecurity className="icon1" />
					<span>secure</span>
				</div>
			</div>
			<div className="homeProduct__trends">
				<div className="productCard">
					<img
						src="http://pngimg.com/uploads/vans/vans_PNG22.png"
						alt=""
					/>
					<div className="product__details">
						<h5>Vans</h5>
						<span>Ksh 200</span>
						<div className="price__drop">
							<del>100</del>
							<span>-25%</span>
						</div>
						<Button className="shopButton">Shop</Button>
					</div>
                </div>
                <div className="productCard">
					<img
						src="http://pngimg.com/uploads/vans/vans_PNG22.png"
						alt=""
					/>
					<div className="product__details">
						<h5>Vans</h5>
						<span>Ksh 200</span>
						<div className="price__drop">
							<del>100</del>
							<span>-25%</span>
						</div>
						<Button className="shopButton">Shop</Button>
					</div>
                </div>
                <div className="productCard">
					<img
						src="http://pngimg.com/uploads/vans/vans_PNG22.png"
						alt=""
					/>
					<div className="product__details">
						<h5>Vans</h5>
						<span>Ksh 200</span>
						<div className="price__drop">
							<del>100</del>
							<span>-25%</span>
						</div>
						<Button className="shopButton">Shop</Button>
					</div>
                </div>
                <div className="productCard">
					<img
						src="http://pngimg.com/uploads/vans/vans_PNG22.png"
						alt=""
					/>
					<div className="product__details">
						<h5>Vans</h5>
						<span>Ksh 200</span>
						<div className="price__drop">
							<del>100</del>
							<span>-25%</span>
						</div>
						<Button className="shopButton">Shop</Button>
					</div>
                </div>
                <div className="productCard">
					<img
						src="http://pngimg.com/uploads/vans/vans_PNG22.png"
						alt=""
					/>
					<div className="product__details">
						<h5>Vans</h5>
						<span>Ksh 200</span>
						<div className="price__drop">
							<del>100</del>
							<span>-25%</span>
						</div>
						<Button className="shopButton">Shop</Button>
					</div>
                </div>
                <div className="productCard">
					<img
						src="http://pngimg.com/uploads/vans/vans_PNG22.png"
						alt=""
					/>
					<div className="product__details">
						<h5>Vans</h5>
						<span>Ksh 200</span>
						<div className="price__drop">
							<del>100</del>
							<span>-25%</span>
						</div>
						<Button className="shopButton">Shop</Button>
					</div>
                </div>
                <div className="productCard">
					<img
						src="http://pngimg.com/uploads/vans/vans_PNG22.png"
						alt=""
					/>
					<div className="product__details">
						<h5>Vans</h5>
						<span>Ksh 200</span>
						<div className="price__drop">
							<del>100</del>
							<span>-25%</span>
						</div>
						<Button className="shopButton">Shop</Button>
					</div>
                </div>
                <div className="productCard">
					<img
						src="http://pngimg.com/uploads/vans/vans_PNG22.png"
						alt=""
					/>
					<div className="product__details">
						<h5>Vans</h5>
						<span>Ksh 200</span>
						<div className="price__drop">
							<del>100</del>
							<span>-25%</span>
						</div>
						<Button className="shopButton">Shop</Button>
					</div>
                </div>
                <div className="productCard">
					<img
						src="http://pngimg.com/uploads/vans/vans_PNG22.png"
						alt=""
					/>
					<div className="product__details">
						<h5>Vans</h5>
						<span>Ksh 200</span>
						<div className="price__drop">
							<del>100</del>
							<span>-25%</span>
						</div>
						<Button className="shopButton">Shop</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
export default HomeProduct;
