import React from "react";
import ProvideAuth from "./components/AuthenticationControl/ProvideAuth";
import Router from "./components/Router/Router";

function App() {
  return (
    <div className="App">
      <ProvideAuth>
      <Router />
      </ProvideAuth>
    </div>
  );
}

export default App;
