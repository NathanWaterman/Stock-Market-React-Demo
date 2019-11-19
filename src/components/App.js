import React, { Component } from "react";
import { stockInfo, stockLogo, stockNews, stockChart } from "../api/marketData";
import StockQuote from "./stockQuote";
import SearchBar from "./searchBar";
import StockNews from "./stockNews";
import StockChart from "./chart/stockChart";
import ErrorUI from "./error";

class App extends Component {
	state = {
		quoteData: "",
		newsData: [],
		chartData: [],
		stockImg: "",
		searchTerm: "ba",
		isLoading: true,
		isError: false
	};

	//enter stock symbol and submit query
	onTermSubmit = async term => {
		//on submit match symbol or companyName
		//EX: "symbol":"FB","companyName":"Facebook"
		await this.setState({
			searchTerm: term
		});
		this.loadStockData();
	};

	removeErr = updateErr => {
		this.setState({ isError: updateErr });
	}

	//load stock data from API
	loadStockData = async () => {
		//load stock info
		await stockInfo(this.state.searchTerm)
			.then(res => {
				this.setState({
					quoteData: res.data,
					isError: false
				});
			})
			.catch(err => {
				this.setState({ isError: true });
				return err;
			});
		//load stock logo img
		await stockLogo(this.state.searchTerm)
			.then(res => {
				this.setState({
					stockImg: res.data.url,
					// isLoading: false
				});
			})
			.catch(err => err);
		//load stock news
		await stockNews(this.state.searchTerm)
			.then(res => {
				this.setState({ newsData: res.data });
			})
			.catch(err => err);
		//load stock chart range data
		await stockChart(this.state.searchTerm)
			.then(res => {
				console.log(res.data);
				this.setState({ chartData: res.data });
			})
			.catch(err => err);
	};

	componentDidMount() {
		this.loadStockData();
		if (!this.state.quoteData) {
			this.setState({ isLoading: false });
		}
	}

	//render news list when the data is available - UNDEFINED CHECK
	renderNewsList = () => {
		if (this.state.newsData) {
			return this.state.newsData.map((item, index) => (
				<StockNews key={index} post={item} />
			))
		}
	}
	//render chart list data if length is not zero load data adn render component
	renderChartData = () => {
		if (this.state.chartData.length != 0) {
			return <StockChart data={this.state.chartData}/>
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
				<div className="ui padded equal height grid">
					<div className="sixteen wide column">
						{this.state.isError ? <ErrorUI removeErr={this.removeErr} /> : ''}
						<div className="sixteen wide column">
							<SearchBar onFormSubmit={this.onTermSubmit} />
						</div>
					</div>
					<div className="sixteen wide stretched column">
						<div className="ui equal height grid">
							<div className="eight wide column">
								<StockQuote
									onChange={this.onTermSubmit}
									quoteData={this.state.quoteData}
									stockImg={this.state.stockImg}
								/>
							</div>
							<div className="eight wide column">
								{/* {this.renderNewsList()} */}
							</div>
							<div className="sixteen wide orange column">
								{this.renderChartData()}
							</div>
						</div>
					</div>
				</div>
			);
		}
	}
}
export default App;
