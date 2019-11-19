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
      categories: [],
      filteredCategories: [],
      categoryListReference: [],
      selectBy: null,
      sortSelection: "popularity"
    };

    this.sortBy = this.sortBy.bind(this);
    this.changeSelectBy = this.changeSelectBy.bind(this);
    this.selectCategories = this.selectCategories.bind(this);
  }

  componentDidMount() {
    try {
      this.getInitialPosts();
      this.getCategories();
    } catch (error) {
      console.error(error);
    }
  }

  async getCategories() {
    try {
      const res = await axios.get(API.CATEGORIES);
      const categories = res.data;
      this.setState({
        categories: localStorage.getItem("user_id") ? ['myPosts', 'favorites'].concat(categories) : categories
      });
    } catch (error) {
      console.log(error);
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
    console.log("getting posts", {
      userId: userId,
      sortBy: this.state.sortSelection,
      categories: strArry,
      selectBy: this.state.selectBy
    });
    try {
      const res = await axios.get(API.MAIN, {
        params: {
          userId: userId,
          sortBy: this.state.sortSelection,
          categories: strArry,
          selectBy: this.state.selectBy
        }
      });
      console.log(res.data);
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
    let categories = [];
    let favoritesIndex = -1;
    let myPostsIndex = -1;
    selected.forEach((category, i) => {
      console.log(category.title)
      if (category.title === 'favorites') {
        favoritesIndex = i;
      } else if (category.title === 'myPosts') {
        myPostsIndex = i;
      } else if (!categories.includes(category.title)) {
        categories.push(category.title);
      }
    })
    let selectByState = null;
    if (favoritesIndex > myPostsIndex) {
      selectByState = 'favorites';
    } else if (favoritesIndex < myPostsIndex) {
      selectByState = 'myPosts';
    }
    this.setState({
      categoryListReference: selectByState ? [selectByState].concat(categories) : categories,
      filteredCategories: categories,
      selectBy: selectByState
    }, () => console.log(this.state));
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.sortSelection !== this.state.sortSelection ||
      prevState.filteredCategories !== this.state.filteredCategories ||
      prevState.selectBy !== this.state.selectBy
    ) {
      this.getPosts();
    }
  }

  changeSelectBy(selection) {
    console.log(selection)
    this.setState({
      selectBy: selection
    }, () => console.log(this.state));
  }

  render() {
    return (
      <Router>
        <div className={styles.container}>
          <div className={styles.header}>
            <Header changeSelectBy={this.changeSelectBy.bind(this)} />
          </div>
          <div className={styles.component}>
            <Switch>
              <Route exact path="/">
                <SortFilter
                  sortBy={this.sortBy}
                  changeSelectBy={this.changeSelectBy}
                  selectCategories={this.selectCategories}
                  categories={this.state.categories}
                  filteredCategories={this.state.categoryListReference}
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
                  categories={this.state.categories}
                  filteredCategories={this.state.categoryListReference}
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
      </Router >
    );
  }
}

export default App;
