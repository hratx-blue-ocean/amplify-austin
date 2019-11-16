import React from "react";
import axios from "axios";

export class Sort extends React.Component {
  render() {
    //temporary
    let theState = {
      popDate: true
    }
    return (
      <input type={'button'} onSubmit={(e) => {
        if (theState.popDate) {
          axios.get('/popular')
            .then((popPosts) => {
              popPosts.map((post, i) => {
                return (
                  <div>
                    <div>
                      {'post.message', i}
                      {'post.date', i}
                      {'post.aplitude', i}
                    </div>
                  </div>
                )
              })
            })
        } else {
          axios.get('http://localhost:8000')
            .then((popPosts) => {
              popPosts.map((post, i) => {
                return (
                  <div>
                    <div>
                      {'post.message', i}
                      {'post.date', i}
                      {'post.aplitude', i}
                    </div>
                  </div>
                )
              })
            })
            .catch(err => {
              console.log(err);
            })
        }

      }}>

      </input>
    )
  }
}

export default Sort;
