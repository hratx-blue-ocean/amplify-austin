import React from "react";
import ReactModal from "react-modal";
import Style from "./NotificationModal.module.css";

ReactModal.setAppElement("body");
// Remember to pass in the message you'd like to display!
const NotificationModal = ({ display, toggleDisplayModal, message }) => {
  if (display) {
    setTimeout(() => toggleDisplayModal(false), 2700);
    return (
      <div className={Style.modal}>
        <p>{message}</p>
      </div>
    );
  } else {
    return null;
  }
};
export default NotificationModal;
