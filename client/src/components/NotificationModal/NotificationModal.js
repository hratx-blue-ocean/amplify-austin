import React from "react";
import ReactModal from "react-modal";
import Style from "./NotificationModal.module.css";

ReactModal.setAppElement("body");

const NotificationModal = ({ display, toggleDisplayModal }) => {
  if (display) {
    setTimeout(() => toggleDisplayModal(false), 2700);
    return (
      <div className={Style.modal}>
        <p>You must be logged in to use this feature! AWESOME COLOR</p>
      </div>
    );
  } else {
    return null;
  }
};
export default NotificationModal;
