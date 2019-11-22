import React, { Component } from "react";

class StockNews extends Component {

    state = {
        limit: 3
    };

    UNSAFE_componentWillReceiveProps() {
        this.setState({
            limit: 3
        });
    }

    onLoadMore = () => {
        this.setState({
            limit: this.state.limit + 3
        });
    }

    render() {

        const renderNewsList = () => {
            return this.props.data.slice(0, this.state.limit).map((list, index) => {
                return (
                    <div className="item" key={index}>
                        <img className="ui avatar image" src={list.image} />
                        <div className="content">
                            <a className="header" href={list.url} target="_blank">{list.headline}</a>
                            <div className="description">{list.summary}</div>
                        </div>
                    </div>
                );
            });
        };

        return (
            <div className="ui list news-list-container">
                {renderNewsList()}
                <button className="ui secondary button" href="#" onClick={this.onLoadMore}>Load More</button>
            </div>
        );
    }
};

export default StockNews;