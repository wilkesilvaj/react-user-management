import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';
import NewUser from './components/AddUser/NewUser';
import { useState } from 'react';
const users = [
  {username: 'John', age: 28},
  {username: 'Rafoso', age: 27}
  
]

function App() {

  const [userList, setUserList] = useState(users);

  // Handler which is passed down until UserForm so we can store the new user in the userList
  const addUserHandler = (user) =>  {
    setUserList((prevUserList) => {
      return [user, ...prevUserList];
    } );
    console.log(userList);
  }

  return (
    <div className="App container-fluid">
      <div className='container my-4'>
        <NewUser onAddUser={addUserHandler}/>        
      </div>
      <div className='container my-4'>
        <UserList  users={userList} />
      </div>
    </div>
  );
}

export default App;
