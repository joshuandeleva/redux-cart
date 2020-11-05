import React from "react";
import "./ProductList.css";
import { Component } from "react";
import { Button } from "@material-ui/core";
export default class ProductList extends Component {
	render() {
		return (
			<div className="productList">
				<ul className="product">
					{this.props.products.map((product) => (
						<li className="productCard" key={product._id}>
							<a href={"#" + product._id}>
								<img src={product.image} alt={product.title} />
								<p>{product.title}</p>
                            </a>
                            <div className="product__price">
                                <div>
                                    {product.price}
                                </div>
                                <Button>Add to Cart</Button>
                            </div>
						</li>
					))}
				</ul>
			</div>
		);
	}
}
