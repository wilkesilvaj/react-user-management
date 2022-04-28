import logo from "./logo.svg";
import "./App.css";
import UserList from "./components/UserList";
import NewUser from "./components/AddUser/NewUser";
import { useState } from "react";

function App() {
  const [userList, setUserList] = useState([]);

  // Handler which is passed down until UserForm so we can store the new user in the userList
  const addUserHandler = (newUser) => {
    setUserList((prevUserList) => {
      return [newUser, ...prevUserList];
    });
    console.log(userList);
  };

  return (
    <div className="App container">
      <NewUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
