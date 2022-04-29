import classes from "./ErrorModal.module.css";
import Card from "../UI/Card";
// import Wrapper from "../Helper/Wrapper";
import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={`text-end ${classes.action}`}>
        <button
          type="button"
          className="btn btn-primary"
          onClick={props.onClose}
        >
          Understood!
        </button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root") // Location where this portal will be rendered in
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onClose={props.onClose}
        />,
        document.getElementById("overlay-root") // Location where this portal will be rendered in
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
