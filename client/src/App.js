import React from "react";
import "./App.css";
import HelloWorld from "./components/HelloWorld";

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HelloWorld></HelloWorld>
      </div>
    );
  }
}

export default App;
