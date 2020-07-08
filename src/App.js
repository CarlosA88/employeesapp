import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";
import EmployeesDashboard from "./components/EmployeesDashboard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <EmployeesDashboard />
        </header>
      </div>
    );
  }
}

export default App;
