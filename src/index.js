import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { HashRouter, BrowserRouter } from "react-router-dom";
import "./assets/styles/base.scss";
import "sweetalert/dist/sweetalert.css";
import Main from "./pages/Main";
import configureStore from "./config/configureStore";
import { Provider } from "react-redux";
import LoginForm from "./components/Login";

const store = configureStore();
const rootElement = document.getElementById("root");

const renderApp = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </Provider>,
    rootElement
  );
};
//console.log(store);
export default renderApp;
renderApp(LoginForm);

// if (module.hot) {
//   //resolve this to convert into class
//   //speeds up dev -retain app state -updates only what is changed
//   module.hot.accept("./pages/Main", () => {
//     const NextApp = require("./pages/Main").default;
//     console.log("Bye", NextApp);
//     renderApp(NextApp);
//   });
// }

registerServiceWorker();
