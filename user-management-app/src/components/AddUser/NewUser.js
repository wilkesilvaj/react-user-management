// import classes from "./NewUser.module.css";
import UserForm from "./UserForm";
import { useState } from "react";
const NewUser = (props) => {
  // Handler which is passed down until UserForm so we can store the new user in the userList
  const saveUserHandler = (inputUser) => {
    // Calls on function passed on by parent component to send data back to it
    props.onAddUser(inputUser);
  };

  return (
    <div className="card">
      <div>
        <UserForm onSaveUserData={saveUserHandler} />
      </div>
    </div>
  );
};

export default NewUser;
