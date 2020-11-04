import React from "react";
import "./Header.css";
import { BsPersonFill } from "react-icons/bs"
import { BiSearch ,BiHelpCircle } from "react-icons/bi"
import { IoIosArrowDown } from "react-icons/io"
import { IoMdCart} from  "react-icons/io"
import Button from "@material-ui/core/Button"
function Header() {
	return (
		<div className="header">
			<div className="header__logo">
				<img src="http://pngimg.com/uploads/nike/nike_PNG17.png" alt=""/>
			</div>
			<div className="header__center">
					<BiSearch  className="serchIcon"/>
					<input type="text" className="input__searches" />
				<Button className="search__button">Search</Button>
			</div>
			<div className="header__right">
				<div className="headerRight__login">
					<BsPersonFill />
					<li className="login">
						<a href="/">Login</a>
					</li>
					<IoIosArrowDown />
				</div>
				<div className="headerRight__help">
				   <BiHelpCircle />
					<li className="login">
						<a href="/">Help</a>
					</li>
					<IoIosArrowDown />
				</div>
				<div className="headerRight__cart">
					<span className="cart">Cart</span>
					<IoMdCart />
				</div>
			</div>
		</div>
	);
}

export default Header;
