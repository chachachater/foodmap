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

function Form({
  title,
  username,
  email,
  password,
  checkPassword,
  submitValue,
  linkValue,
}) {
  return (
    <FormWrapper>
      <UserForm>
        <FormContainer>
          <FormTitle>{title}</FormTitle>
          <FormInfo>
            {username !== undefined && <FormInput placeholder={username} />}
            {email !== undefined && <FormInput placeholder={email} />}
            {password !== undefined && <FormInput placeholder={password} />}
            {checkPassword !== undefined && (
              <FormInput placeholder={checkPassword} />
            )}
          </FormInfo>
          <FormUserTerms>
            當您繼續使用吃貨地圖時，即表示您以閱讀、瞭解並同意接受本服務條款之所有內容。
          </FormUserTerms>
          <FormButton>
            <SubmitButton>{submitValue}</SubmitButton>
            <LinkButton>{linkValue}</LinkButton>
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
