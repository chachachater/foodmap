import styled from "styled-components";
import { FONT, COLOR, MEDIA_QUERY } from "../../constants/style";
import React from "react";

export const BackStageTitle = styled.div`
  margin-top: 236px;
  font-size: 64px;
  color: #013328;
  margin-bottom: 60px;
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
  padding: 5px;
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
  // background-color: ${COLOR.secondary};
  color: black;
  border: 2px solid ${COLOR.secondary};
  height: 49px;
  border-radius: 40px;
  width: 125px;
  ${MEDIA_QUERY.md} {
    height: 32px;
    padding: 0;
    width: 100px;
  }
`;
const Table = styled.table`
  margin: 0 auto;
  width: 768px;
  text-align: center;
  font-size: ${FONT.h2};
  line-height: ${FONT.h2};
  tbody th {
    font-weight: normal;
  }
  td {
    padding: 30px;
    max-width: 300px;
    word-wrap: break-word;
    line-height: 28px;
  }
  ${MEDIA_QUERY.md} {
    width: 100%;
    td {
      padding: 10px;
      max-width: 150px;
      width: 100%;
    }
    font-size: ${FONT.h4};
  }
`;
const BanBtn = styled.button`
  background-color: #dc3545;
  color: white;
  padding: 10px 25px;
  border-radius: 12px;
  font-size: 18px;
  ${MEDIA_QUERY.md} {
    padding: 7px 14px;
  }
`;
const UnbanBtn = styled(BanBtn)`
  background-color: #28a745;
`;
export function UserTable() {
  return (
    <Table>
      <thead>
        <tr>
          <th>Username</th>
          <th>暱稱</th>
          <th>是否停權</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>dicksonWang</td>
          <td>王大明的分身</td>
          <td>no</td>
          <td>
            <BanBtn>Ban</BanBtn>
          </td>
        </tr>
        <tr>
          <td>aszx1314520</td>
          <td>愛情的一縷煙</td>
          <td>no</td>
          <td>
            <BanBtn>Ban</BanBtn>
          </td>
        </tr>
        <tr>
          <td>
            nick:acasasdnick:sacasasdnick:acasasdnick:sacasasdnick:acasasdnick:sacasasdnick:acasasdnick:sacasasdnick:acasasdnick:sacasasdnick:acasasdnick:sacasasdnick:acasasdnick:sacasasdnick:acasasdnick:sacasasdnick:acasasdnick:sacasasdnick:acasasdnick:sacasasd
          </td>
          <td>hacker32</td>
          <td>yes</td>
          <td>
            <UnbanBtn>Unban</UnbanBtn>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
