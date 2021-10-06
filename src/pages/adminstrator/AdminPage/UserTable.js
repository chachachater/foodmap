/* eslint-disable */
import React from "react";
import { Table, TdFlex, BanBtn, UnbanBtn } from "./AdminStyled";
import PropTypes from "prop-types";

export default function UserTable({ userData, handleBanUser, handleUnBanUser }) {
  console.log(userData[0].id)
  const banUser = ()=> {
    
    console.log(userData.id)
    handleBanUser(userData.id)
  }

  const UnBanUser = ()=> {
    console.log(userData.id)
    handleUnBanUser(userData.id)
  }
  
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
        {userData.map(
          (data) =>
            data.user_level !== 2 && (
              <tr key={data.id}>
                <td>{data.username}</td>
                <td>{data.nickname}</td>
                {data.user_level === 1 ? (
                  <TdFlex>
                    <span>no</span>
                    <BanBtn onClick={() => {}}>Ban</BanBtn>
                  </TdFlex>
                ) : (
                  <TdFlex>
                    <span>yes</span>
                    <UnbanBtn onClick={UnBanUser}>Unban</UnbanBtn>
                  </TdFlex>
                )}
              </tr>
            )
        )}
      </tbody>
    </Table>
  );
}
