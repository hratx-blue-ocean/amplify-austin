import React from "react";
import "./App.css";
import Header from "./components/header/header";
import SortFilter from "./components/SortFilter/SortFilter";
import Create from "./components/Create/Create";
import Posts from "./components/Posts/Posts";

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SortFilter />
        <Create />
        <Posts />
        
      </div>
    );
  }
}

export default App;
