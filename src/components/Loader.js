import React, { Component } from 'react';

class Loader extends Component {
    render() {
        return (
            <div>
                <div className="ui segment loading-view">
                    <div className="ui active dimmer">
                        <div className="ui massive text loader">Loading</div>
                    </div>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            </div>
        )
    }
}
export default Loader;