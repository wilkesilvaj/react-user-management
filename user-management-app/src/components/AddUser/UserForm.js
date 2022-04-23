import { useState } from "react";
const UserForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const submitFormHandler = (event) => {
    event.preventDefault();

    const newUser = {
      username: username,
      age: age,
    };

    console.log(newUser);
    props.onSaveUserData(newUser);
    setUsername("");
    setAge("");
  };

  const inputUsernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const inputAgeHandler = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="card text-start">
      <form action="" className="form">
        <h2>Add User Form</h2>
        <div className="row">
          <div className="col-12 col-md-6 mb-2">
            <label className="form-label" htmlFor="username">
              Username
            </label>
            <input
              className="form-control"
              type="text"
              name="username"
              id="username"
              onInput={inputUsernameHandler}
              value={username}
            />
          </div>
          <div className="col-12 col-md-6 mb-2">
            <label className="form-label" htmlFor="age">
              Age (Years)
            </label>
            <input
              className="form-control"
              type="text"
              name="age"
              id="age"
              onInput={inputAgeHandler}
              value={age}
            />
          </div>
        </div>
        <button
          className="btn btn-primary"
          type="submit"
          onClick={submitFormHandler}
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default UserForm;
