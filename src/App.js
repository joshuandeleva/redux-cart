import React from "react";
import "./App.css";
import Header from "./Header";
import data from "./data.json";
import SubBodySlider from "./SubBodySlider";
import HomeProduct from "./HomeProduct";
import { Component } from "react";
import ProductList from "./ProductList";
export default class App extends Component {
	constructor() {
		super();
		this.state = {
			products: data.products,
			size: "",
			sort: "",
		};
	}
	render() {
		return (
			<div className="app">
				<Header />
				<SubBodySlider />
				<HomeProduct />
				<ProductList products={this.state.products} />
			</div>
		);
	}
}
