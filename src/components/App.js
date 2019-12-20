import React, { Component, useState, useEffect } from "react";
import { stockInfo, stockLogo, stockNews, stockChart } from "../api/marketData";
import StockQuote from "./quote/StockQuote";
import SearchBar from "./search/SearchBar";
import StockNews from "./news/StockNews";
import StockChart from "./chart/StockChart";
import ErrorUI from "./Error";

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
	loadStockData = () => {
		//load stock info
		stockInfo(this.state.searchTerm, window.ACCESS_TOKEN)
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
		stockLogo(this.state.searchTerm, window.ACCESS_TOKEN)
			.then(res => {
				this.setState({
					stockImg: res.data.url
				});
			})
			.catch(err => err);
		//load stock news
		stockNews(this.state.searchTerm, window.ACCESS_TOKEN)
			.then(res => {
				this.setState({
					newsData: res.data,
					// isLoading: false
				});
			})
			.catch(err => err);
		//load stock chart range data
		stockChart(this.state.searchTerm, window.ACCESS_TOKEN)
			.then(res => {
				this.setState({
					chartData: res.data,
					isLoading: false
				});
			})
			.catch(err => err);
	};

	componentDidMount() {
		this.loadStockData();
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
				<div className="ui main-view">
					<div className="ui stackable one column grid">
						<div className="row">
							<div className="column">
								{this.state.isError ? <ErrorUI removeErr={this.removeErr} /> : ''}
								<div className="sixteen wide column">
									<SearchBar searchTerm={this.onTermSubmit} />
								</div>
							</div>
						</div>
					</div>
					<div className="ui stackable two column grid">
						<div className="row">
							<div className="column">
								<div className="row">
									<div className="column">
										<StockQuote
											quoteData={this.state.quoteData}
											stockImg={this.state.stockImg}
										/>
									</div>
									<div className="column">
										<div className="news-container ui fluid card">
											{this.state.newsData.length !== 0 ? <StockNews data={this.state.newsData} title={this.state.quoteData.companyName} /> : <h3 className="no-news">There is no Available News</h3>}
										</div>
									</div>
								</div>
							</div>
							<div className="column">
								<div className="row">
									<div className="column">
										<div className="chart-container ui fluid card">
											{this.state.chartData.length !== 0 ? <StockChart data={this.state.chartData} title={this.state.quoteData.companyName} /> : <h3 className="no-chart">There is no Available Stock Chart</h3>}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		}
	}
}
export default App;

// const App = () => {

// 	const [newsData, setNewsData] = useState([]);
// 	const [chartData, setChartData] = useState([]);
// 	const [searchTerm, setSearchTerm] = useState("ba");
// 	const [stockImg, setStockImg] = useState("");
// 	const [quoteData, setQuoteData] = useState("");
// 	const [isLoading, setLoading] = useState(true);
// 	const [isError, setError] = useState(false);


// 	//enter stock symbol and submit query
// 	const onTermSubmit = async term => {
// 		//on submit match symbol or companyName
// 		//EX: "symbol":"FB","companyName":"Facebook"
// 		await setSearchTerm(term);
// 		loadStockData();
// 	};

// 	const removeErr = updateErr => {
// 		setError(updateErr);
// 	}

// 	//load stock data from API
// 	const loadStockData = () => {
// 		//load stock info
// 		stockInfo(searchTerm, window.ACCESS_TOKEN)
// 			.then(res => {
// 				setQuoteData(res.data);
// 				setError(false);
// 			})
// 			.catch(err => {
// 				setError(true);
// 				return err;
// 			});
// 		//load stock logo img
// 		stockLogo(searchTerm, window.ACCESS_TOKEN)
// 			.then(res => {
// 				setStockImg(res.data.url);
// 			})
// 			.catch(err => err);
// 		//load stock news
// 		stockNews(searchTerm, window.ACCESS_TOKEN)
// 			.then(res => {
// 				setNewsData(res.data);
// 			})
// 			.catch(err => err);
// 		//load stock chart range data
// 		stockChart(searchTerm, window.ACCESS_TOKEN)
// 			.then(res => {
// 				setChartData(res.data);
// 				setLoading(false);
// 			})
// 			.catch(err => err);
// 	};

//     useEffect(() => {
//         loadStockData();
//     }, [searchTerm]);


// 	if (isLoading) {
// 		return (
// 			<div>
// 				<div className="ui segment loading-view">
// 					<div className="ui active dimmer">
// 						<div className="ui massive text loader">Loading</div>
// 					</div>
// 					<p></p>
// 					<p></p>
// 					<p></p>
// 				</div>
// 			</div>
// 		);
// 	}
// 	else if (!isLoading) {
// 		return (
// 			<div className="ui main-view">
// 				<div className="ui stackable one column grid">
// 					<div className="row">
// 						<div className="column">
// 							{isError ? <ErrorUI removeErr={removeErr} /> : ''}
// 							<div className="sixteen wide column">
// 								<SearchBar searchTerm={onTermSubmit} />
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 				<div className="ui stackable two column grid">
// 					<div className="row">
// 						<div className="column">
// 							<div className="row">
// 								<div className="column">
// 									<StockQuote
// 										quoteData={quoteData}
// 										stockImg={stockImg}
// 									/>
// 								</div>
// 								<div className="column">
// 									<div className="news-container ui fluid card">
// 										{newsData.length !== 0 ? <StockNews data={newsData} title={quoteData.companyName} /> : <h3 className="no-news">There is no Available News</h3>}
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="column">
// 							<div className="row">
// 								<div className="column">
// 									<div className="chart-container ui fluid card">
// 										{chartData.length !== 0 ? <StockChart data={chartData} title={quoteData.companyName} /> : <h3 className="no-chart">There is no Available Stock Chart</h3>}
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }
// export default App;
