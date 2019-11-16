import React from 'react';
import style from "./PostPageButtons.module.css";

export const PostPageButtons = (props) => {

  return (
    <div className={style.btnWrapper}>
      <button className={style.reachOutBtn}>Reach Out</button>
      {props.resolved ? (
        <button onClick={props.handleResolveDispute} className={style.resolvedBtn}>
          Mark Resolved?
          </button>
      ) : (
          <button onClick={props.handleResolveDispute} className={style.disputeBtn}>
            Dispute Resolution
          </button>
        )}
    </div>
  )
}
