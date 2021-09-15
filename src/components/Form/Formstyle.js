import styled from "styled-components";
import { color, font } from "../../constants/style";

export const FormWrapper = styled.div`
  max-width: 750px;
  margin: 40px auto;
  box-shadow: 7px 7px 38px rgba(0, 0, 0, 0.25);
  border-radius: 18px;
  padding: 48px 32px;
  display: flex;
  justify-content: center;
`;

export const UserForm = styled.form`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const FormTitle = styled.h1`
  font-size: ${font.h1};
  margin-bottom: 50px;
`;
export const FormInfo = styled.div``;

export const FormInput = styled.input`
  width: 100%;
  border-bottom: 1px solid ${color.black};
  padding: 10px 6px;

  &::placeholder {
    color: ${color.text_gray};
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
  background: ${color.btn};
  padding: 10px 52px;
  color: ${color.primany};
  font-weight: 600;
  transition: all 0.1s;

  &:hover {
    filter: saturate(2.5);
  }
`;

export const LinkButton = styled.a`
  margin-top: 28px;
  color: ${color.primany};
  transition: all 0.1s;

  &:hover {
    filter: brightness(3.5);
  }
`;
