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
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { API } from "./constants";

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedPost: firstPost,
      posts: [],
      filteredCategories: [],
      selectBy: null,
      sortSelection: "popularity"
    };

    this.sortBy = this.sortBy.bind(this);
    this.selectCategories = this.selectCategories.bind(this);
  }

  componentDidMount() {
    try {
      this.getInitialPosts();
    } catch (error) {
      console.error(error);
    }
  }

  async getInitialPosts() {
    try {
      const res = await axios.get(API.MAIN, {
        params: {
          sortBy: this.state.sortSelection
        }
      });
      this.setState({
        posts: res.data
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getPosts() {
    let strArry = this.state.filteredCategories.join("/");
    let userId = localStorage.getItem("user_id");

    try {
      const res = await axios.get(API.MAIN, {
        params: {
          userId: userId,
          sortBy: this.state.sortSelection,
          categories: strArry,
          selectBy: this.state.selectBy
        }
      });
      this.setState({
        posts: res.data
      });
    } catch (error) {
      console.log(error);
    }
  }

  sortBy(condition) {
    this.setState({ sortSelection: condition });
  }

  selectCategories(selected) {
    let categories = selected.map(elem => {
      return elem.title;
    });
    this.setState({ filteredCategories: categories });
    console.log("We have reset state");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("State updated!");
    if (
      prevState.sortSelection !== this.state.sortSelection ||
      prevState.filteredCategories !== this.state.filteredCategories
    ) {
      this.getPosts();
    }
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
                  selectCategories={this.selectCategories}
                ></SortFilter>
                <PostContainer
                  postData={this.state.posts}
                  filteredCategories={this.state.filteredCategories}
                ></PostContainer>
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>
              <Route path="/signin">
                <SignIn />
              </Route>
              <PrivateRoute path="/create" component={Create} />
              <Route path="/map">
                <MapPage
                  sortBy={this.sortBy}
                  posts={this.state.posts}
                  selectCategories={this.selectCategories}
                />
              </Route>
              <Route path="/posts/:postID">
                <PostPage filteredCategories={this.state.filteredCategories} />
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
