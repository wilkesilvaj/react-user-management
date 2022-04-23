// import classes from './UserList.module.css';
import User from './User';
const UserList = (props) =>  {

    return <div>
        {props.users.map(user => <User name={user.name} age={user.age} /> )}
    </div>

}

export default UserList;