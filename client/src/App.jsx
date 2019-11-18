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

    this.saveFilters = this.saveFilters.bind(this);
    this.sortBy = this.sortBy.bind(this);
    this.selectCategories = this.selectCategories.bind(this);
  }

  componentDidMount() {
    try {
      this.getPosts();
    } catch (error) {
      console.error(error);
    }
  }

  async getPosts() {
    try {
      const res = await axios.get(API.MAIN, {
        params: {
          sortBy: this.state.sortSelection
        }
      });
      console.log("This is the response: ", res.data);
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.sortSelection === this.state.sortSelection) {
      return;
    } else {
      this.getPosts();
    }
  }

  selectCategories(selected) {
    console.log("These are the updated categories: ", selected);
    let categories = selected.map(elem => {
      return elem.title;
    });
    this.setState({ filteredCategories: categories });
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
                  selectCategories={this.selectCategories}
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
              <PrivateRoute path="/create" component={Create} />
              <Route path="/map">
                <MapPage
                  saveFilters={this.saveFilters}
                  filteredCategories={this.state.filteredCategories}
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
