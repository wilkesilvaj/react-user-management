// import classes from "./UserForm.module.css";
const UserForm = (props) => {

    const submitFormHandler = (event) => {
        event.preventDefault();
    }

  return (
    <div>
      <div>
        <label htmlFor="usernam">Username</label>
        <input type="text" name="username" id="username" />
      </div>
      <div>
        <label htmlFor="age">Age (Years)</label>
        <input type="text" name="age" id="age" />
      </div>
      <button type="submit">Add User</button>
    </div>
  );
};

export default UserForm;
