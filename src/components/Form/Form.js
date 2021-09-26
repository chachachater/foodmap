import React from "react";
import PropTypes from "prop-types";
import {
  FormWrapper,
  UserForm,
  FormContainer,
  FormTitle,
  FormInfo,
  FormInput,
  FormUserTerms,
  FormButton,
  SubmitButton,
  LinkButton,
} from "./Formstyle";

function Form(props) {
  return (
    <FormWrapper>
      <UserForm onSubmit={props.handleSubmit}>
        <FormContainer>
          <FormTitle>{props.title}</FormTitle>
          <FormInfo>
            {props.username && (
              <FormInput
                type="text"
                placeholder={props.username}
                onChange={props.handleUsernameChange}
              />
            )}
            {props.email && (
              <FormInput
                type="email"
                placeholder={props.email}
                onChange={props.handleEmailChange}
              />
            )}
            {props.password && (
              <FormInput
                type="password"
                placeholder={props.password}
                onChange={props.handlePasswordChange}
              />
            )}
            {props.checkPassword && (
              <FormInput
                type="password"
                placeholder={props.checkPassword}
                onChange={props.handleCheckedPasswordChange}
              />
            )}
          </FormInfo>
          <FormUserTerms>
            當您繼續使用吃貨地圖時，即表示您以閱讀、瞭解並同意接受本服務條款之所有內容。
          </FormUserTerms>
          <div>{props.errorMessage}</div>
          <FormButton>
            <SubmitButton>{props.submitValue}</SubmitButton>
            <LinkButton>{props.linkValue}</LinkButton>
          </FormButton>
        </FormContainer>
      </UserForm>
    </FormWrapper>
  );
}

Form.propTypes = {
  title: PropTypes.string,
  username: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  checkPassword: PropTypes.string,
  submitValue: PropTypes.string,
  linkValue: PropTypes.string,
  handleUsernameChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleEmailChange: PropTypes.func,
  handlePasswordChange: PropTypes.func,
  handleCheckedPasswordChange: PropTypes.func,
  errorMessage: PropTypes.string
};

export default Form;
