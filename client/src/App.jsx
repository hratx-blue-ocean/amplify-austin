import React from "react";
import styles from "./App.module.css";
import Header from "./components/header/header.jsx";
import PostContainer from "./components/Posts/PostContainer";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import MapPage from "./components/MapPage/MapPage";
import PostPage from "./components/PostPage/PostPage";
import Create from "./components/Create/Create";
import SortFilter from "./components/SortFilter/SortFilter";
import axios from "axios";
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
      filteredCategories: [],
      sortSelection: "popularity"
    };

    this.saveFilters = this.saveFilters.bind(this);
    this.sortBy = this.sortBy.bind(this);
  }

  componentDidMount() {
    console.log("Inside componentDidMount");
    axios
      .get("/api/main/", {
        params: {
          sortBy: this.state.sortSelection
        }
      })
      .then(res => {
        console.log("This is the response: ", res);
      })
      .catch(error => {
        console.log(error);
      });
  }

  sortBy(condition) {
    let strCondition = condition;
    console.log("sort by function called, this is condition: ", strCondition);
    // make axios call based on new state
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
                <SortFilter
                  sortBy={this.sortBy}
                  saveFilters={this.saveFilters}
                ></SortFilter>
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
                <MapPage
                  saveFilters={this.saveFilters}
                  filteredCategories={this.state.filteredCategories}
                />
              </Route>
              <Route path="/posts/:postID">
                <PostPage />
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
