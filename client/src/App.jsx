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

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { API } from "./constants";
import Loading from "./components/Loading/Loading";

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      categories: [],
      selectBy: null,
      response: undefined,
      filteredCategories: [],
      sortSelection: "popularity",
      stateChanger: 0
    };
    this.sortBy = this.sortBy.bind(this);
    this.changeSelectBy = this.changeSelectBy.bind(this);
    this.selectCategories = this.selectCategories.bind(this);
  }

  componentDidMount() {
    try {
      this.getPosts(true);
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
      console.error(error);
    }
  }

  async getPosts(mounting) {
    let strArry = this.state.filteredCategories.join("/");
    let userId = localStorage.getItem("user_id");
    try {
      this.setState({ response: false });
      const res = await axios.get(API.MAIN, {
        params: {
          userId: userId,
          sortBy: this.state.sortSelection,
          categories: strArry,
          selectBy: this.state.selectBy,
          response: true
        }
      });
      console.log(res);
      this.setState({
        posts: res.data,
        response: true,
      }, () => {
        // Momentarily keep the initial response on page load output
        if (mounting) { console.log(this.state.posts) }
      });
    } catch (error) {
      // true so no posts displays instead of spinner
      this.setState({ response: true });
      console.error(error);
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
      prevState.selectBy !== this.state.selectBy ||
      prevState.stateChanger !== this.state.stateChanger
    ) {
      this.getPosts();
    }
  }

  changeSelectBy(selection) {
    this.setState({
      selectBy: selection,
      stateChanger: Math.random()
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
                {this.state.response ? (
                  <PostContainer
                    postData={this.state.posts}
                    filteredCategories={this.state.filteredCategories}
                  />
                ) : (
                    <Loading />
                  )}
                {/* <div className={styles.footer}>BLUE</div> */}
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
                <PostPage
                  getPosts={this.getPosts}
                  filteredCategories={this.state.filteredCategories}
                />
              </Route>
              <Route path="*">
                {/* TODO: replace with 404 page */}
                <Redirect to="/" />
              </Route>
            </Switch>
            {/* <div className={styles.footerSpaceHolder}></div> */}
          </div>
          <div className={styles.footer}></div>
        </div>
      </Router>
    );
  }
}

export default App;
