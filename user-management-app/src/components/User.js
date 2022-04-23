import classes from "./User.module.css";
const User = (props) => {
  return (
    <div>
      <div>
        <p>
          <strong>{props.name}</strong>({props.age})
        </p>
      </div>
    </div>
  );
};

export default User;
