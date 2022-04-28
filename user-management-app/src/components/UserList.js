import User from "./User";
import Card from "./UI/Card";
const UserList = (props) => {
  console.log(props.users.length);
  if (props.users.length > 0) {
    return (
      <Card>
        <ul>
          {props.users.map((user) => (
            <li key={user.id}>
              <User username={user.username} age={user.age} />
            </li>
          ))}
        </ul>
      </Card>
    );
  } else {
    return;
  }
};

export default UserList;
