import React from "react";
import PropTypes from "prop-types";
import {
  FormWrapper,
  UserForm,
  FormContainer,
  FormTitle,
  FormInfo,
  FormInput,
  ErrMessage,
  FormUserTerms,
  FormButton,
  SubmitButton,
} from "./FormStyle";

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
            {props.invalidUsername && (
              <ErrMessage>
                長度 4 ~
                32，不可含有：空白、冒號(:)、引號(&apos;)、句號(.)、連結號(&amp;)
              </ErrMessage>
            )}

            {props.email && (
              <FormInput
                type="email"
                placeholder={props.email}
                onChange={props.handleEmailChange}
              />
            )}
            {props.invalidEmail && <ErrMessage>不合法的信箱</ErrMessage>}

            {props.password && (
              <FormInput
                type="password"
                placeholder={props.password}
                onChange={props.handlePasswordChange}
              />
            )}
            {props.invalidPassword && (
              <ErrMessage>長度 6 ~ 64，不可含有：空白</ErrMessage>
            )}

            {props.checkPassword && (
              <FormInput
                type="password"
                placeholder={props.checkPassword}
                onChange={props.handleCheckedPasswordChange}
              />
            )}
            {props.invalidCheckedPassword && (
              <ErrMessage>與密碼不符</ErrMessage>
            )}
          </FormInfo>
          <FormUserTerms>
            當您繼續使用吃貨地圖時，即表示您以閱讀、瞭解並同意接受本服務條款之所有內容。
          </FormUserTerms>
          <div>{props.errorMessage}</div>
          <FormButton>
            <SubmitButton>{props.submitValue}</SubmitButton>
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
  invalidUsername: PropTypes.bool,
  invalidPassword: PropTypes.bool,
  invalidCheckedPassword: PropTypes.bool,
  invalidEmail: PropTypes.bool,
  submitValue: PropTypes.string,
  linkValue: PropTypes.string,
  handleUsernameChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleEmailChange: PropTypes.func,
  handlePasswordChange: PropTypes.func,
  handleCheckedPasswordChange: PropTypes.func,
  errorMessage: PropTypes.string,
};

export default Form;
