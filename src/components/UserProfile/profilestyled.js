import styled from "styled-components";
import React from "react";
import addBtn from "../pictures/addBtn.svg";
import AvatarImg from "../pictures/avatar.png";
import BannerImg from "../pictures/banner.png";

import { FONT, COLOR } from "../../constants/style";

const Banner = styled.div`
  height: 380px;
  width: 100%;
  overflow: hidden;
  position: relative;
  background: url(${BannerImg}) center/cover;
  z-index: -1;
`;
const AddBanner = styled.div`
  background: url(${addBtn}) center/cover;
  position: absolute;
  z-index: 1;
  bottom: 5px;
  right: 5px;
  height: 40px;
  width: 40px;
`;
const Avatar = styled.div`
  width: 192px;
  height: 192px;
  background: url(${AvatarImg}) center/cover;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  z-index: 0;
`;
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 130px;
`;
const Name = styled.div`
  margin-top: 15px;
  font-size: ${FONT.logo};
  margin-bottom: 40px;
  letter-spacing: 2px;
`;
const ArticleCounter = styled.div``;
const InfoContainer = styled(ProfileContainer)`
  align-items: center;
  margin-top: -110px;
  margin-bottom: 0;
`;
const AddAvatar = styled(AddBanner)`
  bottom: 0;
  right: 0;
`;
const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 220px;
  width: 220px;
`;
const EditingGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
const EditName = styled.button`
  font-size: ${FONT.h3};
  color: ${COLOR.text_gray};
  border: 1px solid #013328;
  border-radius: 25px;
  padding: 15px 30px;
  margin-bottom: 30px;
`;
const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 40px;
`;
const SaveBtn = styled.button`
  font-size: ${FONT.h3};
  color: ${COLOR.primary};
  overflow: hidden;
  background-color: ${COLOR.btn};
  border-radius: 25px;
  padding: 10px 25px;
`;
const CancelBtn = styled(SaveBtn)`
  background-color: transparent;
  border: 1px solid black;
  color: ${COLOR.text_gray};
  margin-left: 40px;
`;
export function Profile() {
  return (
    <ProfileContainer>
      <Banner>
        <AddBanner />
      </Banner>
      <InfoContainer>
        <AvatarContainer>
          <Avatar />
          <AddAvatar />
        </AvatarContainer>
        <Name>rich</Name>
        <EditingGroup>
          <EditName>編輯名稱</EditName>
          <BtnContainer>
            <SaveBtn>儲存</SaveBtn>
            <CancelBtn>取消</CancelBtn>
          </BtnContainer>
        </EditingGroup>
        <ArticleCounter>共有 1 篇食記</ArticleCounter>
      </InfoContainer>
    </ProfileContainer>
  );
}
