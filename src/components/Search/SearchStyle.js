import styled from "styled-components";
import { COLOR } from "../../constants/style";
import placeBtn from '../pictures/placeBtn.png'

export const SearchWrapper = styled.form`
  width: 100%;
  background: ${COLOR.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-radius: 40px;
`
export const SearchInput = styled.input`
  padding: 0 8px;

  &::placeholder {
    color: ${COLOR.text_gray};
  }
`
export const SearchButton = styled.button`
  border: 1px solid ${COLOR.black};
  border-radius: 40px;
  padding: 2px 32px;

  &:hover {
    background: ${COLOR.btn};
  }
`
export const ButtonImg = styled.div`
  background: url(${placeBtn}) center/cover;
  width: 25px;
  height: 25px;
`

