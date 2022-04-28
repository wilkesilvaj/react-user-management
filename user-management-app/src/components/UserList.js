import User from "./User";
import Card from "./UI/Card";
const UserList = (props) => {
  if (props.users.length > 0) {
    return (
      <Card className="bg-white">
        {props.users.map((user) => (
          <div key={user.id}>
            <User username={user.username} age={user.age} />
          </div>
        ))}
      </Card>
    );
  } else {
    return;
  }
};

export default UserList;
