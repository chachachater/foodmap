import styled from "styled-components";
import { FONT, COLOR, MEDIA_QUERY } from "../../constants/style";
import React from "react";

export const BackStageTitle = styled.div`
  margin-top: 236px;
  font-size: ${FONT.logo};
  font-size: 64px;
  color: #013328;
  margin-bottom: 60px;
  text-align: center;
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
  }
`;

export const SearchInput = styled.input`
  font-size: 30px;
  line-height: 60px;
  margin-left: 20px;
  width: 80%;
`;
export const SearchBtn = styled.button`
  background-color: ${COLOR.btn};
  height: 49px;
  border-radius: 40px;
  padding: 10px 50px;
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
          <td>我的哀低是從領數到一百反正只要到三十二個字都可以喔</td>
          <td>user:rich</td>
          <td>no</td>
        </tr>
        <tr>
          <td>12345678901234567890123456789012</td>
          <td>user:rich</td>
          <td>no</td>
        </tr>
        <tr>
          <td>
            nick:acasasdnick:sacasasdnick:acasasdnick:sacasasdnick:acasasdnick:sacasasdnick:acasasdnick:sacasasdnick:acasasdnick:sacasasdnick:acasasdnick:sacasasdnick:acasasdnick:sacasasdnick:acasasdnick:sacasasdnick:acasasdnick:sacasasdnick:acasasdnick:sacasasd
          </td>
          <td>user:rich</td>
          <td>no</td>
        </tr>
      </tbody>
    </Table>
  );
}
