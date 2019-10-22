import React, { Component } from "react";

class StockQuote extends Component {
	render() {
		return (
            <div>
                <div>
                    <img src={this.props.stockImg}/>
                </div>
                <div>Symbol: {this.props.symbol}</div>
                <div>Price Open: {this.props.openPrice}</div>
                <div>Price Close: {this.props.closePrice}</div>
            </div>
        )
	}
}
export default StockQuote;
