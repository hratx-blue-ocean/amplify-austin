import React from "react";
import style from "../PostPage.module.css";

const PostPageSubGroup = ({ type, categoryName, created_at }) => {
  return (
    <div className={style.subheading}>
      <div className={style.subGroup}>
        <h4>Type: </h4>
        <h6>{type}</h6>
      </div>
      <div className={style.subGroup}>
        <h4>Category: </h4>
        <h6>{categoryName}</h6>
      </div>
      <div className={style.subGroup}>
        <h4>Date Reported: </h4>
        {console.log(typeof created_at)}
        <h6>{created_at}</h6>
      </div>
    </div>
  );
};

export default PostPageSubGroup;
