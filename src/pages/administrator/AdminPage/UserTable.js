import React from "react";
import { Table, TdFlex, BanBtn, UndoBtn, Span } from "./AdminStyled";
import PropTypes from "prop-types";

function UserTable({ userData, handleBanUser, handleUnBanUser }) {
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
        {userData &&
          userData.map(
            (data) =>
              data.user_level !== 2 && (
                <tr key={data.id}>
                  <td>{data.username}</td>
                  <td>{data.nickname}</td>
                  {data.user_level === 1 ? (
                    <TdFlex>
                      <Span>no</Span>
                      <BanBtn
                        onClick={() => {
                          handleBanUser(data.id);
                        }}
                      >
                        Ban
                      </BanBtn>
                    </TdFlex>
                  ) : (
                    <TdFlex>
                      <Span>yes</Span>
                      <UndoBtn
                        onClick={() => {
                          handleUnBanUser(data.id);
                        }}
                      >
                        Unban
                      </UndoBtn>
                    </TdFlex>
                  )}
                </tr>
              )
          )}
      </tbody>
    </Table>
  );
}

UserTable.propTypes = {
  userData: PropTypes.array,
  handleBanUser: PropTypes.func,
  handleUnBanUser: PropTypes.func,
};

export default UserTable;
