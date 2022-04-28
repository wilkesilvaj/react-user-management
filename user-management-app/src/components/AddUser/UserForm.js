import { useState } from "react";
import ErrorModal from "../Modals/ErrorModal";
const UserForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const errorResetHandler = () => {
    setError(null);
  }

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid Data",
        message: "Please enter a valid username and age (non-empty values).",
      });

      return;
    }
    if (+age < 0) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (positive integer value).",
      });
      return;
    }

    const newUser = {
      username: username,
      age: age,
      id: Math.random().toString(),
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
    <div className="text-start">
      {/* The following will display the error modal only if an "error" object exists */}
      {error && <ErrorModal title={error.title} message={error.message} onClose={errorResetHandler} />}
      <div>
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
                type="number"
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
    </div>
  );
};

export default UserForm;
