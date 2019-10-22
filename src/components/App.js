import React, { Component } from "react";
import { stockInfo, stockLogo, stockNews, stockChart } from "../api/marketData";
import StockQuote from "./stockQuote";

class App extends Component {
	state = { stockImg: "", symbol: "", openPrice: "", closePrice: "" };

	getStockLogo = () => {
		stockLogo("fb")
			.then(res => {
				console.log(res);
				this.setState({
					stockImg: res.data.url
				});
			})
			.catch(err => err);
	};

	getStockQuote = () => {
		stockInfo("FB")
			.then(res => {
				console.log(res);
				this.setState({
					symbol: res.data.symbol,
					openPrice: res.data.open,
					closePrice: res.data.close
				});
			})
			.catch(err => err);
	};

	componentDidMount() {
		this.getStockQuote();
		this.getStockLogo();
	}

	render() {
		return (
			<div>
				<div className="ui grid">
					<div className="twelve wide column">Search Bar</div>
					<div className="six wide column">
						<StockQuote
							stockImg={this.state.stockImg}
							symbol={this.state.symbol}
							openPrice={this.state.openPrice}
							closePrice={this.state.closePrice}
						/>
					</div>
					<div className="six wide column">Stock Chart</div>
					<div className="six wide column">Stock News</div>
				</div>
			</div>
		);
	}
}
export default App;
