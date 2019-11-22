import React, { Component } from "react";

class errorUI extends Component {
    state = { closeErr: false };

    ErrClose = () => {
        this.props.removeErr(this.state.closeErr);
    };

    render() {
        return (
            <div className="ui error message">
                <i onClick={this.ErrClose} className="close icon"></i>
                <div className="header">
                    There were some errors with your submission
                </div>
                <ul className="list">
                    <li>You have entered the wrong Stock Quote Symbol.</li>
                </ul>
            </div>
        )
    }
}
export default errorUI;