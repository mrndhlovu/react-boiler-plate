import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { render } from "react-dom";

import AppContainer from "./containers/AppContainer";
import BaseRouter from "./Routes";
import store from "./store";

export default class App extends Component {
  start() {
    this.launchApp({ userAuth: false });
  }

  launchApp(auth) {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AppContainer>
            <BaseRouter />
          </AppContainer>
        </BrowserRouter>
      </Provider>,
      document.getElementById("app")
    );
  }
}
