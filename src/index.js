import React from "react";
import ReactDOM from "react-dom";
import Login from "./components/login/Login";
import App from "./components/App"; /* NEEDED FOR TESTING */
import "../node_modules/semantic-ui-css/semantic.min.css";
import "../src/css/styles.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Login />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
