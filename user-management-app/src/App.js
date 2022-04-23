import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';
import NewUser from './components/AddUser/NewUser';
const userList = [
  {username: 'John', age: 28},
  {username: 'Rafoso', age: 27}
  
]

function App() {
  return (
    <div className="App container-fluid">
      <div className='container my-4'>
        <NewUser />        
      </div>
      <div className='container my-4'>
        <UserList  users={userList} />
      </div>
    </div>
  );
}

export default App;
