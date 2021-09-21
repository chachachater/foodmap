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
} from "./FormStyle";

function Form(props) {
  return (
    <FormWrapper>
      <UserForm>
        <FormContainer>
          <FormTitle>{props.title}</FormTitle>
          <FormInfo>
            {props.username && (
              <FormInput type="text" placeholder={props.username} />
            )}
            {props.email && (
              <FormInput type="email" placeholder={props.email} />
            )}
            {props.password && (
              <FormInput type="password" placeholder={props.password} />
            )}
            {props.checkPassword && (
              <FormInput type="password" placeholder={props.checkPassword} />
            )}
          </FormInfo>
          <FormUserTerms>
            當您繼續使用吃貨地圖時，即表示您以閱讀、瞭解並同意接受本服務條款之所有內容。
          </FormUserTerms>
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
};

export default Form;
