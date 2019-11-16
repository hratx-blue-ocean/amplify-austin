import React from "react";
import styles from "./App.module.css";
import Header from "./components/header/header.jsx";
import PostContainer from "./components/Posts/PostContainer";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
// import MapPage from "./components/MapPage/MapPage";
import Create from "./components/Create/Create";
import { allIssues, firstPost } from "./FAKEDATA";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

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

  // Pass this function down to any Filter Component
  // used. Otherwise shit won't work
  saveFilters(categories) {
    this.setState({
      filteredCategories: categories
    });
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
              <Route exact path="/">
                {/* TO BE REPLACED BY THE HOME PAGE */}
                <PostContainer
                  postData={this.state.posts}
                  saveFilters={this.saveFilters}
                  filteredCategories={this.state.filteredCategories}
                ></PostContainer>
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>
              <Route path="/signin">
                <SignIn />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
              <Route path="/map">
                {/* <MapPage
                  saveFilters={this.saveFilters}
                  filteredCategories={this.state.filteredCategories}
                /> */}
                <div> Map Page (Travis CLI hates it) </div>
              </Route>
              <Route path="/posts/:postID">
                {/* <PostsPage /> */}
                <div> Post Page (Travis CLI hates it too) </div>
              </Route>
              <Route path="*">
                {/* TODO: replace with 404 page */}
                <Redirect to="/" />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
