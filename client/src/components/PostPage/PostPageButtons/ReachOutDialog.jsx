import React from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import style from "./ReachOutDialog.module.css";

const ReachOutDialog = (props) => {
  const { open, onClose, contact } = props;

  const { department, phoneNumber, name, email } = contact;

  return (
    <Dialog onClose={onClose} aria-labelledby="department-contact-info" open={open}>
      <DialogTitle style={{ textAlign: "center", paddingBottom: "8px" }} id="department-contact-info">Contact Information:</DialogTitle>
      <List>
        <ListItem style={{ flexWrap: "wrap" }}>
          <h3 className={style.headings}>Department: <span className={style.headingText}><a className={style.link} href={email}>{department}</a></span></h3>
          <h4 className={style.headings}>Point of Contact: <span className={style.headingText}>{name}</span></h4>
          <address>
            <span className={style.numberHeading}>Number:{" "}</span><a className={style.phoneLink} href={`tel:+1${ phoneNumber }`}>{phoneNumber}</a>
          </address>
        </ListItem>
      </List>
    </Dialog >
  )
}

export default ReachOutDialog;
