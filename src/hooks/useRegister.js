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
  const [invalidUsername, setInvalidUsername] = useState();
  const [invalidPassword, setInvalidPassword] = useState();
  const [invalidCheckedPassword, setInvalidCheckedPassword] = useState();
  const [invalidEmail, setInvalidEmail] = useState();
  const history = useHistory();
  const dispatch = useDispatch();

  const validateUsername = () => {
    if (!username) return setInvalidUsername(true);
    if (/^[\w!"#$%()*+,\-/;<=>?@[\]^\\`_{|}~]{4,32}$/g.test(username))
      return setInvalidUsername(false);
    return setInvalidUsername(true);
  };
  const validatePassword = () => {
    if (!password) return setInvalidPassword(true);
    if (/^[^ ]{6,64}$/g.test(password)) return setInvalidPassword(false);
    return setInvalidPassword(true);
  };
  const validateCheckedPassword = () => {
    if (!password || !checkedPassword) return setInvalidCheckedPassword(true);
    if (password.normalize() === checkedPassword.normalize())
      return setInvalidCheckedPassword(false);
    return setInvalidCheckedPassword(true);
  };
  const validateEmail = () => {
    if (!email) return setInvalidEmail(true);
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email))
      return setInvalidEmail(false);
    return setInvalidEmail(true);
  };
  const handleInputChange = (setter) => {
    return (e) => {
      setter(e.target.value);
    };
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    validateUsername();
    validatePassword();
    validateCheckedPassword();
    validateEmail();
    if (
      [
        invalidUsername,
        invalidPassword,
        invalidCheckedPassword,
        invalidEmail,
      ].every((each) => each !== false)
    )
      return;
    const userData = {
      username,
      password,
      checkedPassword,
      email,
    };
    dispatch(registerAsync(userData)).then((result) => {
      if (!result.payload.ok) return setErrorMessage(result.payload.message);
      setErrorMessage("");
      history.push("/home");
    });
  };
  return {
    errorMessage,
    setUsername,
    setPassword,
    setCheckedPassword,
    setEmail,
    invalidUsername,
    invalidPassword,
    invalidCheckedPassword,
    invalidEmail,
    handleInputChange,
    handleSubmit,
  };
}
