import React from "react";
import "./quote.css";

const stockQuote = (props) => {

    const { quoteData, stockImg } = props;

    return (
        <div className="ui fluid card quote-info">
            <div className="content">
                <div className="header">
                    <div className="ui two column grid">
                        <div className="six wide column">
                            <img src={stockImg} />
                        </div>
                        <div className="ten wide column company-name">
                            <h1>{quoteData.companyName}</h1>
                        </div>
                    </div>
                </div>
                <div className="ui two column grid">
                    <div className="row">
                        <div className="four wide column">
                            <h4>Price Close</h4>
                        </div>
                        <div className="eleven wide column">
                            <p>{quoteData.close}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="four wide column">
                            <h4>Week 52 High</h4>
                        </div>
                        <div className="eleven wide column">
                            <p className="high">{quoteData.week52High}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="four wide column">
                            <h4>Week 52 Low</h4>
                        </div>
                        <div className="eleven wide column">
                            <p className="low">{quoteData.week52Low}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="four wide column">
                            <h4>Exchange</h4>
                        </div>
                        <div className="eleven wide column">
                            <p>{quoteData.primaryExchange}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default stockQuote;