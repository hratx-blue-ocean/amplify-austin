import React, { useState } from "react";
import style from "./PostPageButtons.module.css";
import ReachOutDialog from "./ReachOutDialog";

export const PostPageButtons = props => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={style.btnWrapper}>
      <button onClick={handleOpen} className={style.reachOutBtn}>
        Reach Out
      </button>
      <ReachOutDialog
        contact={props.contacts[0]}
        open={open}
        onClose={handleClose}
      />
      {props.resolved ? (
        <button
          onClick={props.handleResolveDispute}
          className={style.disputeBtn}
        >
          Dispute Resolution
        </button>
      ) : (
        <button
          onClick={props.handleResolveDispute}
          className={style.resolvedBtn}
        >
          Mark Resolved
        </button>
      )}
    </div>
  );
};
