import { useState, useRef } from "react";
import ErrorModal from "../Modals/ErrorModal";
const UserForm = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  const errorResetHandler = () => {
    setError(null);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    const inputName = nameInputRef.current.value;
    const inputAge = ageInputRef.current.value;
    if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
      setError({
        title: "Invalid Data",
        message: "Please enter a valid username and age (non-empty values).",
      });

      return;
    }
    if (+inputAge < 0) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (positive integer value).",
      });
      return;
    }

    const newUser = {
      username: inputName,
      age: inputAge,
      id: Math.random().toString(),
    };

    props.onSaveUserData(newUser);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  return (
    <div className="text-start">
      {/* The following will display the error modal only if an "error" object exists */}
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClose={errorResetHandler}
        />
      )}
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
                ref={nameInputRef}
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
                ref={ageInputRef}
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
