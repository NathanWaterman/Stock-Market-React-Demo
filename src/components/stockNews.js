import React from "react";

class StockNews extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        limit: 3
    };

    componentWillReceiveProps(){
        this.setState({
            limit: 3
        });
    }

  render() {

    const onLoadMore = () =>  {
        this.setState({
            limit: this.state.limit + 3
        });
    }

    const renderNewsList = () =>{
        return this.props.data.slice(0,this.state.limit).map((list,index)=>{
            return(
                <div className="item" key={index}>
                  <img className="ui avatar image" src={list.image}/>
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
            <button className="ui secondary button" href="#" onClick={onLoadMore}>Load More</button>
        </div>
    );
  }
};

export default StockNews;