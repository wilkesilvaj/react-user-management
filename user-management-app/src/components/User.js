import classes from "./User.module.css";
const User = (props) => {
  return (
    <div className="card">
      <div>
        <p>
          <strong>{props.username}</strong>({props.age})
        </p>
      </div>
    </div>
  );
};

export default User;
