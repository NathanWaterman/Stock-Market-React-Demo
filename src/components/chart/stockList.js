import React from "react";

class StockList extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        limit: 10
    };

    componentWillReceiveProps(){
        this.setState({
            limit: 10
        });
    }

  render() {

    const onLoadMore = () =>  {
        this.setState({
            limit: this.state.limit + 5
        });
    }

    const renderChartList = () =>{
        return this.props.chartListData.slice(0,this.state.limit).map((list,index)=>{
            return(
                <tr className="item" key={index}>
                    <td data-label="date">{list.date}</td>
                    <td data-label="open">{list.open}</td>
                    <td data-label="high">{list.high}</td>
                    <td data-label="low">{list.low}</td>
                    <td data-label="close">{list.close}</td>
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
            
            <button className="ui secondary button" href="#" onClick={onLoadMore}>Load More</button>
        </div>
    );
  }
};

export default StockList;