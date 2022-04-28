// import classes from "./NewUser.module.css";
import UserForm from "./UserForm";
import { useState } from "react";
import Card from "../UI/Card";
const NewUser = (props) => {
  // Handler which is passed down until UserForm so we can store the new user in the userList
  const saveUserHandler = (inputUser) => {
    // Calls on function passed on by parent component to send data back to it
    props.onAddUser(inputUser);
  };

  return (
    <Card className="p-2">
      <div>
        <UserForm onSaveUserData={saveUserHandler} />
      </div>
    </Card>
  );
};

export default NewUser;
