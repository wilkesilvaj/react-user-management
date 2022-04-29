import classes from "./ErrorModal.module.css";
import Card from "../UI/Card";
import Wrapper from "../Helper/Wrapper";
const ErrorModal = (props) => {
  return (
    <Wrapper>
      <div className={classes.backdrop} onClick={props.onClose}>
        <Card className={classes.modal}>
          <header className={classes.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={classes.content}>
            <p>{props.message}</p>
          </div>
          <footer className={`text-end ${classes.action}`}>
            <button type="button" className="btn btn-primary" onClick={props.onClose}>Understood!</button>
          </footer>
        </Card>
      </div>
    </Wrapper>
  );
};

export default ErrorModal;
