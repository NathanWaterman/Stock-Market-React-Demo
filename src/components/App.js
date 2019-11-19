import React, { Component } from "react";
import { stockInfo, stockLogo, stockNews, stockChart } from "../api/marketData";
import StockQuote from "./stockQuote";
import SearchBar from "./searchBar";
import StockNews from "./stockNews";
import ErrorUI from "./error";

class App extends Component {
	state = {
		quoteData: "",
		stockImg: "",
		symbol: "",
		openPrice: "",
		closePrice: "",
		searchTerm: "mdb",
		isLoading: true,
		isError: false
	};

	onTermSubmit = async term => {
		//on submit match symbol or companyName
		//EX: "symbol":"FB","companyName":"Facebook"
		await this.setState({
			searchTerm: term
		});
		this.loadStockData();
	};

	removeErr = updateErr =>{
		this.setState({isError: updateErr});
	}

	/* MOVE INTO OWN COMPONENT AND PASS PROPS */
	loadStockData = async () => {
		await stockLogo(this.state.searchTerm)
			.then(res => {
				this.setState({
					stockImg: res.data.url,
					isLoading: false
				});
			})
			.catch(err => err);

		await stockInfo(this.state.searchTerm)
			.then(res => {
				this.setState({
					quoteData: res.data,
					isError: false
				});
			})
			.catch(err => {
				this.setState({isError: true});
				return err
			});
	};

	componentDidMount() {
		this.loadStockData();
		if(!this.state.quoteData){
			this.setState({	isLoading: false });
		}
	}

	render() {
		if (this.state.isLoading) {
			return (
				<div>
					<div className="ui segment loading-view">
						<div className="ui active dimmer">
							<div className="ui massive text loader">Loading</div>
						</div>
						<p></p>
						<p></p>
						<p></p>
					</div>
				</div>
			);
		}
		 else if (!this.state.isLoading) {
			return (
				<div className="sixteen wide column">
					{this.state.isError ? <ErrorUI removeErr={this.removeErr}/> : ''}
					<div className="ui two column grid">
						<div className="sixteen wide column">
							<SearchBar onFormSubmit={this.onTermSubmit} />
						</div>
						<div className="eight wide column">
							<StockQuote
								onChange={this.onTermSubmit}
								quoteData={this.state.quoteData}
								stockImg={this.state.stockImg}
							/>
						</div>
						<div className="eight wide column">
							<StockNews/>
						</div>
						<div className="sixteen wide column">Stock Chart</div>
					</div>
				</div>
			);
		}
	}
}
export default App;
