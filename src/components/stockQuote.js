import React from "react";

const stockQuote = (props) =>{
    return (
        <div>
            <div>
                <img src={props.stockImg}/>
            </div>
            <div>Symbol: {props.symbol}</div>
            <div>Price Open: {props.openPrice}</div>
            <div>Price Close: {props.closePrice}</div>
        </div>
    )
}
export default stockQuote;