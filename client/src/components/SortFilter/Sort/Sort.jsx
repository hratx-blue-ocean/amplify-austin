import React from "react";
import axios from "axios";

export class Sort extends React.Component {
  render() {
    //temporary
    let theState = {
      popDate: true
    };
    return (
      <input
        type={"button"}
        onSubmit={e => {
          if (theState.popDate) {
            axios.get("/popular").then(popPosts => {
              //give jonny this array of objecys sorted by date
            });
          } else {
            axios
              .get("http://localhost:8000/api")
              .then(popPosts => {
                //give Jonny boy this array of objects sorted  by popular
              })
              .catch(err => {
                console.log(err);
              });
          }
        }}
      ></input>
    );
  }
}

export default Sort;
