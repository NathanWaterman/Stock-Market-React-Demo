import React, { Component, useState, useEffect } from "react";
import PropTypes from 'prop-types';
import "./news.css";

class StockNews extends Component {

    state = {
        limit: 5
    };

    UNSAFE_componentWillReceiveProps() {
        this.setState({
            limit: 5
        });
    }

    onLoadMore = () => {
        this.setState({
            limit: this.state.limit + 3
        });
    }

    formatDate = (timestamp) => {
        const newDate = new Date(timestamp);
        const dd = newDate.getDate();
        const mm = newDate.getMonth() + 1;
        const yy = newDate.getFullYear();
        return mm + "/" + dd + "/" + yy;
    }

    renderNewsList = (data) => {
        return data.slice(0, this.state.limit).map((list, index) => {
            return (
                <div className="item" key={index}>
                    <img className="ui avatar image" src={list.image} />
                    <div className="content">
                        <a className="header" href={list.url} target="_blank">{list.headline}</a>
                        <p className="four wide column">source: <i>{list.source}</i>, {this.formatDate(list.datetime)}</p>
                        <div className="description">{list.summary}</div>
                    </div>
                </div>
            );
        });
    };

    render() {

        const { data, title } = this.props;

        return (
            <div className="ui list news-list-container">
                <h2>News About {title}</h2>
                {this.renderNewsList(data)}
                <button className="ui secondary button" href="#" onClick={this.onLoadMore}>Load More</button>
            </div>
        );
    }
};
export default StockNews;

//set strict type checking
StockNews.propTypes = {
    data: PropTypes.array,
    title: PropTypes.string
}


// //REACT HOOK
// const StockNews = ({ data, title }) => {

//     const [limit, setLimit] = useState(5);

//     const formatDate = (timestamp) => {
//         const newDate = new Date(timestamp);
//         const dd = newDate.getDate();
//         const mm = newDate.getMonth() + 1;
//         const yy = newDate.getFullYear();
//         return mm + "/" + dd + "/" + yy;
//     }

//     const onLoadMore = () => {
//         console.log(limit);
//         setLimit(limit + 3);
//     }

//     //componentWillReceiveProps React hook equivalent
//     useEffect(() => {
//         setLimit(5);
//     }, [data])

//     const renderNewsList = () => {
//         return data.slice(0, limit).map((list, index) => {
//             return (
//                 <div className="item" key={index}>
//                     <img className="ui avatar image" src={list.image} />
//                     <div className="content">
//                         <a className="header" href={list.url} target="_blank">{list.headline}</a>
//                         <p className="four wide column">source: <i>{list.source}</i>, {formatDate(list.datetime)}</p>
//                         <div className="description">{list.summary}</div>
//                     </div>
//                 </div>
//             );
//         });
//     };

//     return (
//         <div className="ui list news-list-container">
//             <h2>News About {title}</h2>
//             {renderNewsList()}
//             <button className="ui secondary button" href="#" onClick={onLoadMore}>Load More</button>
//         </div>
//     )
// }

// export default StockNews;