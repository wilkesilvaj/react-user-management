import User from "./User";
import Card from "./UI/Card";
const UserList = (props) => {
  return (
    <Card>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            <User username={user.username} age={user.age}  />
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
