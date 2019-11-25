import React from 'react';
import { stockInfo } from "../../api/marketData";

import {
BrowserRouter as Router, Route } from 'react-router-dom';
import ValidUser from "../App";

class App extends React.Component {

    state = {
        login_TOKEN: '',
        loggedin: false
    }
    onInputChange = async e => {
        await this.setState({ login_TOKEN: e.target.value });
    };
    
    onSearchSubmit = () => {

        window.ACCESS_TOKEN = this.state.login_TOKEN;

        stockInfo("ba", window.ACCESS_TOKEN)
			.then(res => {
                console.log(res);
                this.setState({ loggedin: true });
			})
			.catch(err => {
				console.log(err);
			});
    };

    isAuth = () =>{
        if(this.state.loggedin){
            return <Route  component={ValidUser} />
        }
        else{
            return <div>
                    <label>enter token</label>
                    <input 
                        type="text" 
                        onChange={this.onInputChange}
                    />
                    <button className="ui button" onClick={this.onSearchSubmit}>Find Stock Quote</button>
                    {/* {this.state.isError ? <ErrorUI removeErr={this.removeErr} /> : ''} */}
                </div>
        }
    }
    
    componentDidMount() {
        this.onSearchSubmit();
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
export default App;