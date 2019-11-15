import React from "react";
import Header from "./components/Header/Header";
import styles from "./App.module.css";
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
      <div className={styles.container}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.component}>
          {/**Your component here for looks testing */}
        </div>
      </div>
    );
  }
}

export default App;
