import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SortFilter from "./components/SortFilter/SortFilter";
import Create from "./components/Create/Create";
import Posts from "./components/Posts/Posts";
import { allIssues, firstPost } from "./FAKEDATA";

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedPost: firstPost,
      posts: allIssues
    };
  }
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
