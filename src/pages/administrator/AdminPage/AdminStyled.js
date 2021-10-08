import styled from "styled-components";
import { FONT, COLOR, MEDIA_QUERY } from "../../../constants/style";

export const BackStageWrapper = styled.div`
  padding: 0 16px;
  margin-top: 236px;
`;

export const BackStageTitle = styled.div`
  margin-bottom: 60px;
  font-size: 64px;
  color: ${COLOR.primary};
  text-align: center;

  ${MEDIA_QUERY.md} {
    font-size: ${FONT.logo};
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 3px solid #99bc90;
  border-radius: 40px;
  width: 768px;
  padding: 10px;
  margin: 0 auto;
  height: 67px;
  margin-bottom: 100px;

  ${MEDIA_QUERY.md} {
    width: 100%;
    height: 45px;
  }
`;

export const SearchInput = styled.input`
  font-size: ${FONT.h2};
  line-height: 60px;
  margin-left: 20px;
  width: 80%;

  ${MEDIA_QUERY.md} {
    line-height: 36px;
    font-size: ${FONT.h4};
  }
`;

export const SearchBtn = styled.button`
  color: black;
  border: 2px solid ${COLOR.secondary};
  height: 49px;
  border-radius: 40px;
  width: 120px;

  &:hover {
    background: ${COLOR.btn};
    font-weight: 600;
  }

  ${MEDIA_QUERY.md} {
    height: 32px;
    padding: 0;
    width: 100px;
  }
`;

export const Table = styled.table`
  margin: 0 auto;
  width: 768px;
  text-align: center;
  font-size: ${FONT.h2};
  line-height: ${FONT.h2};

  tbody th {
    font-weight: normal;
  }

  th {
    white-space: nowrap;
  }

  td {
    border-bottom: 1px solid ${COLOR.text_gray};
    font-size: ${FONT.h3};
    padding: 30px;
    word-wrap: break-word;
    line-height: 28px;
  }

  ${MEDIA_QUERY.md} {
    width: 100%;
    font-size: ${FONT.h4};

    td {
      padding: 10px;
    }
  }

  ${MEDIA_QUERY.sm} {
    td {
      font-size: ${FONT.h4};
    }
  }
`;

export const TdFlex = styled.td`
  ${MEDIA_QUERY.md} {
    display: flex;
    flex-direction: column;
    align-content: center;
  }
`;

export const Span = styled.span`
  width: 50px;
  margin: 0 auto;
  display: inline-block;
`;

export const BanBtn = styled.button`
  background-color: #dc3545;
  color: ${COLOR.white};
  padding: 8px 16px;
  border-radius: 40px;
  font-size: 18px;
  margin-left: 12px;
  width: 100px;

  &: hover {
    background: ${COLOR.btn};
    color: ${COLOR.primary};
  }

  ${MEDIA_QUERY.md} {
    margin: 12px auto 0;
    padding: 8px 10px;
  }
`;

export const UndoBtn = styled(BanBtn)`
  background-color: #28a745;
`;
