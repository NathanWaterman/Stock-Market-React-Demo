import React, { Component, useState, useEffect } from "react";
import './chart.css';

class StockList extends Component{

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

    const { chartListData } = this.props;

    const renderChartList = () =>{
        return chartListData.slice(0,this.state.limit).map((list,index, elementList)=>{
            //BUG TODO - last item gets put at the top of the list, throwing off calculation
            const len = elementList.length;
            const previous = elementList[(index+len-1)%len];
            const next = elementList[(index+1)%len];

            // console.log("Current: " + list.close);
            // if (index > 0) {
            //     var previous = elementList[index-1].close;
            //     console.log("Previous: " + elementList[index-1].close);  
            // }
            // if (index < (elementList.length - 1)) {
            //     var next = elementList[index+1].close;
            //     console.log("Next: " + elementList[index+1].close);
            // }
            

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
            <table className="ui tablet stackable table">
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

// //REACT HOOK
// const StockList = ({ chartListData }) => {

//     const [limit, setLimit] = useState(10);


//     const onLoadMore = () => {
//         setLimit(limit + 5);
//     }

//     const renderChartList = () => {
//         return chartListData.slice(0, limit).map((list, index, array) => {
//             const len = array.length;
//             const previous = array[(index + len - 1) % len];
//             const next = array[(index + 1) % len];

//             const nextVal = () => {
//                 if (next.close > previous.close) {
//                     return <td data-label="close" className="high"><div className="arrow-up"></div><p>{list.close}</p></td>

//                 } else {
//                     return <td data-label="close" className="low"><div className="arrow-down"></div><p>{list.close}</p></td>
//                 }
//             }
//             return (
//                 <tr className="item" key={index}>
//                     <td data-label="date">{list.date}</td>
//                     <td data-label="open">{list.open}</td>
//                     <td data-label="high">{list.high}</td>
//                     <td data-label="low">{list.low}</td>
//                     {nextVal()}
//                 </tr>
//             );
//         });
//     };

//     //componentWillReceiveProps React hook equivalent
//     useEffect(() => {
//         setLimit(10);
//     }, [chartListData])

//     return (
//         <div className="ui list chart-list-container">
//             <table className="ui tablet stackable table">
//                 <thead>
//                     <tr>
//                         <th>Date</th>
//                         <th>Open</th>
//                         <th>High</th>
//                         <th>Low</th>
//                         <th>Close</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {renderChartList()}
//                 </tbody>
//             </table>

//             <button className="ui secondary button" href="#" onClick={onLoadMore}>Load More</button>
//         </div>
//     );
// }
// export default StockList;