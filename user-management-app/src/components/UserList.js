// import classes from './UserList.module.css';
import User from './User';
const UserList = (props) =>  {

    return <div>
        {props.users.map(user => <User username={user.username} age={user.age} key={user.username} /> )}
    </div>

}

export default UserList;