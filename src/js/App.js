import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { render } from "react-dom";

import AppContainer from "./containers/AppContainer";
import BaseRouter from "./Routes";
import store from "./store";

const APP_NAME = "react-template";

export default class App extends Component {
  start() {
    this.launchApp({ userAuth: false });
  }

  launchApp(auth) {
    const { userAuth } = auth;
    render(
      <Provider store={store}>
        <BrowserRouter basename={`${APP_NAME}?auth=${userAuth}`}>
          <AppContainer>
            <BaseRouter />
          </AppContainer>
        </BrowserRouter>
      </Provider>,
      document.getElementById("root")
    );
  }
}
