// import classes from "./NewUser.module.css";
import UserForm from "./UserForm";
import { useState } from "react";
import Card from "../UI/Card";
const NewUser = (props) => {
  const [isValid, setIsValid] = useState({
    isvalid: false,
    message: "",
  });

  // Handler which is passed down until UserForm so we can store the new user in the userList
  const saveUserHandler = (inputUser) => {
    // Calls on function passed on by parent component to send data back to it
    props.onAddUser(inputUser);
  };

  const validateUser = (newUser) => {
    if (newUser.username.length === 0 && newUser.age.length === 0) {
      setIsValid({
        isvalid: false,
        message: "Please enter a valid username and age (non-empty values).",
      });
    } else if (newUser.username.length === 0) {
      setIsValid({
        isvalid: false,
        message: "Please enter a valid username (non-empty value).",
      });
    } else if (newUser.age.length === 0) {
      setIsValid({
        isvalid: false,
        message: "Please enter a valid age (a positive integer value).",
      });
    } else {
      setIsValid({
        isvalid: true,
        message: "",
      });
    }
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
