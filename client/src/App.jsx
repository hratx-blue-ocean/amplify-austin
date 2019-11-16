import React from "react";
import styles from "./App.module.css";
import Header from "./components/header/header.jsx";
// import PostsPage from "./components/PostPage/PostPage";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import MapPage from "./components/MapPage/MapPage";
import Create from "./components/Create/Create";
import { allIssues, firstPost } from "./FAKEDATA";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedPost: firstPost,
      posts: allIssues,
      filteredCategories: []
    };
    this.saveFilters = this.saveFilters.bind(this);
  }

  // Pass this function down to any FilterButton Component
  // used. Otherwise shit won't work
  saveFilters(categories) {
    this.setState({
      filteredCategories: categories
    })
  }

  render() {
    return (
      <Router>
        <div className={styles.container}>
          <div className={styles.header}>
            <Header />
          </div>
          <div className={styles.component}>
            <Switch>
              {/**Your component here for looks testing */}
              <Route exact path="/">
                {/* TO BE REPLACED BY THE HOME PAGE */}
                <div>test</div>
                {/* <PostsPage /> */}
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>
              <Route path="/signin">
                <SignIn />
              </Route>
              <Route path="/map">
                <MapPage
                  saveFilters={this.saveFilters}
                  filteredCategories={this.state.filteredCategories}
                />
                {/* <div> map place holder </div> */}
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
