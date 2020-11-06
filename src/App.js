import React ,{Component} from "react";
import "./App.css";
import Header from "./Header";
import SubBodySlider from "./SubBodySlider";
import HomeProduct from "./HomeProduct";
import data from "./data.json";
export default class App extends Component {
	constructor() {
		super();
		this.state = {
			products: data.products,
			size: "",
			sort:""
		};
	}
	render() {
		return (
			<div className="app">
				<Header />
				<SubBodySlider />
				<HomeProduct products={this.state.products}/>
			</div>
		);
	}
}
