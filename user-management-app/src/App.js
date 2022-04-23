import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';
const userList = [
  {name: 'John', age: 28}
]

function App() {
  return (
    <div className="App">
      <div>
        <UserList users={userList} />
      </div>
    </div>
  );
}

export default App;
