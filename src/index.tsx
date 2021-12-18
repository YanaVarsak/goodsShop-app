import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { App } from "components";
import { store } from "store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import  "./server"

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
