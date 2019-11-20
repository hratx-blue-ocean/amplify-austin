import React, { useState } from "react";
import style from "./PostPageButtons.module.css";
import ReachOutDialog from "./ReachOutDialog";

export const PostPageButtons = ({ status, contact, handleStatus }) => {
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
      <ReachOutDialog contact={contact} open={open} onClose={handleClose} />
      {status === "resolved" ? (
        <button onClick={handleStatus} className={style.disputeBtn}>
          Dispute Resolution
        </button>
      ) : status === "disputed" ? (
        <button
          disabled
          title={"The resolution of this issue is currently in dispute"}
          className={style.disputed}
        >
          Disputed...
        </button>
      ) : (
        <button onClick={handleStatus} className={style.resolvedBtn}>
          Mark Resolved
        </button>
      )}
    </div>
  );
};
