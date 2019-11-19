import React from "react";

const stockNews = (props) =>{

    const { headline, summary, url, datetime } = props.post;

    console.log(headline);

    return (
        <div className="ui fluid card">
            <div className="post-body">
                <h4>{headline}</h4>
                <h4>{summary}</h4>
            </div>
        </div>
    )
}
export default stockNews;