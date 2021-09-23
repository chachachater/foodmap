import styled from "styled-components";
import { COLOR, MEDIA_QUERY } from "../../constants/style";
import placeBtn from "../pictures/placeBtn.png";

export const SearchWrapper = styled.form`
  width: 100%;
  background: ${COLOR.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-radius: 40px;
`;
export const SearchInput = styled.input`
  padding: 0 8px;
  width: 85%;

  &::placeholder {
    color: ${COLOR.text_gray};
  }

  ${MEDIA_QUERY.sm} {
    width: 75%;
  }
`;
export const SearchButton = styled.button`
  border: 1px solid ${COLOR.black};
  border-radius: 40px;
  padding: 2px 28px;

  &:hover {
    background: ${COLOR.btn};
  }
`;
export const ButtonImg = styled.div`
  background: url(${placeBtn}) center/cover;
  width: 25px;
  height: 25px;
`;
