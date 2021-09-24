import styled from "styled-components";
import { COLOR, FONT } from "../../../constants/style";
import plus from "../../../components/pictures/plus.png";
import deleteBtn from "../../../components/pictures/deleteBtn.png";
import deleteBtnHover from "../../../components/pictures/deleteBtnHover.png";

export const EditContainer = styled.div`
  padding: 150px 16px 0;
  max-width: 1200px;
  margin: 0 auto;
`;

export const EditInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  aligin-items: center;
`;

export const EditLabel = styled.label`
  margin-bottom: 48px;
  border-bottom: 1px solid ${COLOR.text_gray};
  padding: 8px 0;
  display: flex;
  aligin-items: center;
`;

export const Span = styled.span`
  background: url(${plus}) center/cover;
  width: 30px;
  height: 30px;
  margin-right: 8px;
`;

export const Input = styled.input``;

export const FileInput = styled.input`
  width: 0;
  height: 0;
`;

export const NoBorderLabel = styled(EditLabel)`
  border: none;
  color: ${COLOR.text_gray};
  font-size: ${FONT.h4};
  vertical-align: middle;
  line-height: 30px;
  margin-bottom: 24px;
`;

export const UnloadImg = styled.div`
  margin-bottom: 24px;
  display: flex;
`;

export const ImgBox = styled.div`
  height: 200px;
  width: 260px;
  box-shadow: 2px 2px 4px 2px rgb(0, 0, 0, 0.2);
  position: relative;

  & + & {
    margin-left: 18px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const DeleteBtn = styled.button`
  background: url(${deleteBtn}) center/cover;
  width: 25px;
  height: 25px;
  position: absolute;
  right: -10px;
  top: -10px;

  &:hover {
    background: url(${deleteBtnHover}) center/cover;
  }
`;

export const SubmitButton = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 48px;
`;

export const Button = styled.button`
  color: ${COLOR.primary};
  font-size: ${FONT.h4};
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 40px;
  background: ${COLOR.btn};

  &:hover {
    filter: saturate(2.5);
  }
`;
