import styled from "styled-components";
import { COLOR, FONT } from "../../constants/style";

export const FormWrapper = styled.div`
  padding: 0 16px;
`;

export const UserForm = styled.div`
  max-width: 750px;
  margin: 40px auto 0;
  box-shadow: 7px 7px 38px rgba(0, 0, 0, 0.25);
  border-radius: 18px;
  padding: 48px 32px;
  display: flex;
  justify-content: center;
`;

export const FormContainer = styled.form`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const FormTitle = styled.h1`
  font-size: ${FONT.h1};
  margin-bottom: 50px;
`;
export const FormInfo = styled.div`
  width: 100%;
`;

export const FormInput = styled.input`
  width: 100%;
  border-bottom: 1px solid ${COLOR.black};
  padding: 10px 6px;

  &::placeholder {
    color: ${COLOR.text_gray};
  }

  & + & {
    margin-top: 36px;
  }
`;
export const FormUserTerms = styled.p`
  margin-top: 64px;
  padding: 0 48px;
  text-align: center;
`;

export const FormButton = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SubmitButton = styled.button`
  border-radius: 40px;
  background: ${COLOR.btn};
  padding: 10px 52px;
  color: ${COLOR.primany};
  font-weight: 600;
  transition: all 0.1s;

  &:hover {
    filter: saturate(2.5);
  }
`;

export const LinkButton = styled.a`
  margin-top: 28px;
  color: ${COLOR.primany};
  transition: all 0.1s;

  &:hover {
    filter: brightness(3.5);
  }
`;
