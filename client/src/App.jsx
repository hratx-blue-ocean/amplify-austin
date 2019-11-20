import React from "react";
import styles from "./App.module.css";
import Header from "./components/header/header.jsx";
import PostContainer from "./components/Posts/PostContainer";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import MapPage from "./components/MapPage/MapPage";
import PostPage from "./components/PostPage/PostPage";
import Create from "./components/Create/Create";
import Title from "./components/header/title";
import SortFilter from "./components/SortFilter/SortFilter";
import axios from "axios";
import UserStatus from "./components/userStatus/UserStatus";

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
      this.setState({
        categories: res.data
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
      console.log(res.data);
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
    const categories = selected.map(category => {
      return category.title;
    });
    this.setState({
      filteredCategories: categories
    });
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
    this.setState({
      selectBy: selection
    });
  }

  render() {
    return (
      <Router>
        <div className={styles.container}>
          <Header changeSelectBy={this.changeSelectBy.bind(this)} />
          {/* <div className={styles.header}>
          </div> */}
          <div className={styles.component}>
            <Switch>
              <Route exact path="/">
                <UserStatus />
                <Title title={this.state.selectBy} />
                <SortFilter
                  sortBy={this.sortBy}
                  categories={this.state.categories}
                  selectCategories={this.selectCategories}
                  filteredCategories={this.state.filteredCategories}
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
                  posts={this.state.posts}
                  selectBy={this.state.selectBy}
                  categories={this.state.categories}
                  changeSelectBy={this.changeSelectBy}
                  selectCategories={this.selectCategories}
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
