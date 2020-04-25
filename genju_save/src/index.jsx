import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import styles from "./assets/css/app.css";

ReactDOM.render(
  <div className={styles.App}>
    <App />
  </div>, document.getElementById("app")
);
