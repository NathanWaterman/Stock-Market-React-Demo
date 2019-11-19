import React from "react";

const stockQuote = (props) =>{

    const { quoteData, stockImg } = props;

    return (
        <div className="ui fluid card quote-info">
            <div className="content">
                <div className="header">
                    <div className="ui two column grid">
                        <div className="six wide column">
                            <img src={stockImg}/>
                        </div>
                        <div className="eight wide column">
                            <p>{quoteData.companyName}</p>
                        </div>
                    </div>
                </div>
                <div className="ui two column grid">
                    <div className="row">
                        <div className="four wide column">
                            <h4>Price Close:</h4>
                        </div>
                        <div className="eight wide column">
                        <div>{quoteData.close}</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="four wide column">
                            <h4>Week 52 High:</h4>
                        </div>
                        <div className="eight wide column">
                            <div className="high">{quoteData.week52High}</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="four wide column">
                            <h4>Week 52 Low:</h4>
                        </div>
                        <div className="eight wide column">
                        <div className="low">{quoteData.week52Low}</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="four wide column">
                            <h4>Exchange:</h4>
                        </div>
                        <div className="eight wide column">
                        <div>{quoteData.primaryExchange}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default stockQuote;