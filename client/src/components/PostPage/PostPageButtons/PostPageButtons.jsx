import React, { useState } from "react";
import style from "./PostPageButtons.module.css";
import ReachOutDialog from "./ReachOutDialog";

export const PostPageButtons = ({ resolutionInfo, contact, handleStatus }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  console.log(resolutionInfo)
  if (resolutionInfo.userMarked) {
    return (
      <div className={style.btnWrapper}>
        <button onClick={handleOpen} className={style.reachOutBtn}>
          Reach Out
        </button>
        <ReachOutDialog contact={contact} open={open} onClose={handleClose} />
        {resolutionInfo.status === "resolved" ? (
          <button
            onClick={handleStatus}
            title={"You've marked this post as resolved"}
            className={style.unResolve}
          >
            UnMark Resolved?
          </button>
        ) : resolutionInfo.status === "disputed" ? (
          <button
            disabled
            title={"You've marked this post as disputed"}
            className={style.disputed}
          >
            UnMark Disputed?
          </button>
        ) : (
              <div onClick={handleStatus} className={style.resolvedBtn}>
                resolution count {resolutionInfo.count}
              </div>
            )}
      </div>
    );
  } else {
    return (
      <div className={style.btnWrapper}>
        <button onClick={handleOpen} className={style.reachOutBtn}>
          Reach Out
        </button>
        <ReachOutDialog contact={contact} open={open} onClose={handleClose} />
        {resolutionInfo.status === "resolved" ? (
          <button onClick={handleStatus} className={style.disputeBtn}>
            Dispute Resolution
          </button>
        ) : resolutionInfo.status === "disputed" ? (
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
  }
};
