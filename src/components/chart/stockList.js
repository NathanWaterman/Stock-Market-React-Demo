import React, { Component } from "react";

class StockList extends Component{
    constructor(props) {
        super(props);
    }

    state = {
        limit: 10
    };

    UNSAFE_componentWillReceiveProps(){
        this.setState({
            limit: 10
        });
    }

    onLoadMore = () =>  {
        this.setState({
            limit: this.state.limit + 5
        });
    }

  render() {

    const renderChartList = () =>{
        return this.props.chartListData.slice(0,this.state.limit).map((list,index, array)=>{
            const len = array.length;
            const previous = array[(index+len-1)%len];
            const next = array[(index+1)%len];
            
            const nextVal = () =>{
                if(next.close > previous.close){
                    return <td data-label="close" className="high"><div className="arrow-up"></div><p>{list.close}</p></td>

                }else{
                    return <td data-label="close" className="low"><div className="arrow-down"></div><p>{list.close}</p></td>
                }
            }
            return(
                <tr className="item" key={index}>
                    <td data-label="date">{list.date}</td>
                    <td data-label="open">{list.open}</td>
                    <td data-label="high">{list.high}</td>
                    <td data-label="low">{list.low}</td>
                    {nextVal()}
                </tr>
            );
        });
    };

    return (
        <div className="ui list chart-list-container">
            <table className="ui celled table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Open</th>
                        <th>High</th>
                        <th>Low</th>
                        <th>Close</th>
                    </tr>
                </thead>
                <tbody>
                    {renderChartList()}
                </tbody>
            </table>
            
            <button className="ui secondary button" href="#" onClick={this.onLoadMore}>Load More</button>
        </div>
    );
  }
};

export default StockList;