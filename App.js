navigator.geolocation = require('@react-native-community/geolocation');

import React from 'react';
import createStore from "./src/store/createStore";
import AppContainer from "./src/AppContainer/index";


class App extends React.Component {
  renderApp() {
    const initialState = window.___INTITIAL_STATE__;
    const store = createStore(initialState);

    return (

      <AppContainer store={store} />

    );
  }

  render() {
    return this.renderApp();
  }
}



export default App;