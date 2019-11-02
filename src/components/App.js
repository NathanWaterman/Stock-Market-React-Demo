import React, { Component } from "react";
import { stockInfo, stockLogo, stockNews, stockChart } from "../api/marketData";
import StockQuote from "./stockQuote";
import SearchBar from "./searchBar";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			stockImg: "",
			symbol: "",
			openPrice: "",
			closePrice: "",
			searchTerm: "fb",
			isLoading: true
		};
	}

	onTermSubmit = term => {
		console.log(term);

		//on submit match symbol or companyName
		//EX: "symbol":"FB","companyName":"Facebook"

		this.setState({
			searchTerm: term
		});
	};

	/* MOVE INTO OWN COMPONENT AND PASS PROPS */
	loadStockData = () => {
		stockLogo(this.state.searchTerm)
			.then(res => {
				this.setState({
					stockImg: res.data.url,
					isLoading: false
				});
			})
			.catch(err => err);

		stockInfo(this.state.searchTerm)
			.then(res => {
				this.setState({
					symbol: res.data.symbol,
					openPrice: res.data.open,
					closePrice: res.data.close,
					isLoading: false
				});
			})
			.catch(err => err);
	};

	componentDidMount() {
		this.loadStockData();
	}
	componentWillUpdate() {
		this.loadStockData();
	}

	render() {
		if (this.state.isLoading) {
			return <div>Loading...</div>;
		} else if (!this.state.isLoading) {
			return (
				<div>
					<div className="ui grid">
						<div className="twelve wide column">
							<SearchBar onFormSubmit={this.onTermSubmit} />
						</div>
						<div className="six wide column">
							<StockQuote
								onChange={this.onTermSubmit}
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
}
export default App;
