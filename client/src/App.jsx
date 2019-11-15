import React from "react";
import styles from "./App.module.css";
import Header from "./components/header/header.jsx";
import { allIssues, firstPost } from "./FAKEDATA";
import MapPage from './components/MapPage/MapPage'

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
      <div className={styles.container}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.component}>
          <MapPage />
        </div>
      </div>
    );
  }
}

export default App;
