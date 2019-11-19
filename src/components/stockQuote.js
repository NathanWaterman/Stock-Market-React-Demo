import React from "react";

const stockQuote = (props) =>{

    const { quoteData, stockImg } = props;

    return (
        <div className="ui fluid card">
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
                <div>Week 52 High: 1234</div>
                <div>Week 52 Low: 1234</div>
                <div>Price Close: {quoteData.close}</div>
                <div>Exchange: Exchange</div>
            </div>
        </div>
    )
}
export default stockQuote;