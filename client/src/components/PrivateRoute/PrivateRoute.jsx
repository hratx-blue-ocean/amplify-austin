import React from 'react'
import { Route, Redirect } from "react-router-dom"

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const userID = localStorage.getItem("user_id");
  return (
    <Route {...rest} render={(props) => (
      userID ? <Component {...props} /> : <Redirect to="/signin" />
    )} />
  )
}
