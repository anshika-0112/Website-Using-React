import React from "react";
import Router from "./components/Router/Router";
import {Provider} from "react-redux";
import store from "./components/redux/store"
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router />
    </div>
    </Provider>
  );
}

export default App;
