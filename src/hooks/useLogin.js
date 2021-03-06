import { useState } from "react";
import { loginAsync } from "../redux/reducers/userReducer";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function useLogin() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const history = useHistory();
  const dispatch = useDispatch();

  function handleInputChange(setter) {
    return (e) => {
      setter(e.target.value);
    };
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const userData = {
      username,
      password,
    };
    dispatch(loginAsync(userData))
      .then((result) => {
        if (!result.payload.ok) return setErrorMessage(result.payload.message);
        setErrorMessage("");
        history.push("/home");
      })
      .catch((err) => console.log(err));
    
  }
  return {
    errorMessage,
    setUsername,
    setPassword,
    handleInputChange,
    handleSubmit,
  };
}
