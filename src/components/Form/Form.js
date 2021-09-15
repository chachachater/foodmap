import {
  FormWrapper,
  UserForm,
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
      </UserForm>
    </FormWrapper>
  );
}

export default Form;
