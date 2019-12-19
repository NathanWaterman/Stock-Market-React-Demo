import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import { stockInfo } from "../../api/marketData";
import './login.css';
import LoginError from "./LoginError";
import ValidUser from "../App";

class Login extends Component {

    state = {
        login_TOKEN: '',
        loggedin: false,
        isError: false,
    }
    onInputChange = async e => {
        await this.setState({ login_TOKEN: e.target.value });
    };

    loginSubmit = e => {

        e.preventDefault();

        window.ACCESS_TOKEN = this.state.login_TOKEN;

        stockInfo("ba", window.ACCESS_TOKEN)
            .then(() => {
                this.setState({
                    loggedin: true,
                    isError: false
                });
            })
            .catch(err => {
                this.setState({ isError: true });
                console.log(err);
            });
    };

    removeErr = updateErr => {
        this.setState({ isError: updateErr });
    }

    isAuth = () => {
        if (this.state.loggedin) {
            return <Route component={ValidUser} />
        }
        else {
            return <div className="login-ui">
                <div className="column">
                    <h2 className="ui teal image header">
                        <div className="content"> Please Enter Authentication Token</div>
                    </h2>
                    <form className="ui large form" onSubmit={this.loginSubmit}>
                        <div className="ui stacked segment">
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="lock icon"></i>
                                    <input type="text" onChange={this.onInputChange} />
                                </div>
                            </div>
                            <button className="ui fluid large teal submit button" type="submit">Login</button>
                        </div>
                    </form>
                    {this.state.isError ? <LoginError removeErr={this.removeErr} /> : ''}
                </div>
            </div>
        }
    }

    componentDidMount() {
        this.isAuth();
    }

    render() {
        return (
            <Router>
                <div>
                    {this.isAuth()}
                </div>
            </Router>
        )
    }
}
export default Login;