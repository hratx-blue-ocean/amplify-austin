import React from "react";
import style from "../PostPage.module.css";

const PostPageSubGroup = ({ categoryName, created_at }) => {
  const dateFormat = { month: "short", day: "numeric", year: "numeric" };
  const dateCreated = new Date(created_at).toLocaleDateString(
    undefined,
    dateFormat
  );
  return (
    <div className={style.subheading}>
      <div>
        <div className={style.subGroup}>
          <h4>Category: </h4>
          <h6>{categoryName}</h6>
        </div>
      </div>
      <div>
        <div className={style.subGroup}>
          <h4>{categoryName === 'Events' ? 'Event Date: ' : 'Date Recorded: '}</h4>
          <h6>{dateCreated}</h6>
        </div>
      </div>
    </div>
  );
};

export default PostPageSubGroup;
