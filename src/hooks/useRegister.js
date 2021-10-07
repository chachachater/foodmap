import { useState } from "react";
import { registerAsync } from "../redux/reducers/userReducer";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function useRegister() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [checkedPassword, setCheckedPassword] = useState();
  const [email, setEmail] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const history = useHistory();
  const dispatch = useDispatch();

  const handleInputChange = (setter) => {
    return (e) => {
      setter(e.target.value);
    };
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username,
      password,
      checkedPassword,
      email,
    };
    dispatch(registerAsync(userData))
    .then((result) => {
      console.log(result)
      if (!result.payload.ok) return setErrorMessage(result.payload.message);
      setErrorMessage("");
      history.push("/home");
    });
  }
  return {
    errorMessage,
    setUsername,
    setPassword,
    setCheckedPassword,
    setEmail,
    handleInputChange,
    handleSubmit,
  };
}
