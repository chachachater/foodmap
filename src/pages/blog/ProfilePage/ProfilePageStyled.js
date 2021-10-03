/* eslint-disable */
import styled from "styled-components";
import addBtn from "../../../components/pictures/addBtn.svg";
import AvatarImg from "../../../components/pictures/avatar.png";
import BannerImg from "../../../components/pictures/banner.png";
import plus from "../../../components/pictures/plus.png";

import { FONT, COLOR } from "../../../constants/style";

export const Banner = styled.div`
  height: 380px;
  width: 100%;
  overflow: hidden;
  position: relative;
  background: #bebebe;
  background: ${props => props.banner ? `url(${props.banner}) center/cover;` : ''};
`;
export const EditLabel = styled.label`
    border: none;
    margin-bottom: 0;
    height: fit-content;
    width: fit-content;
    // padding: 8px 0;
    display: flex;
  // margin-top: 15px;
  // font-size: ${FONT.logo};
  margin-bottom: 40px;
  letter-spacing: 2px;
`;
export const Span = styled.span`
  background: url(${plus}) center/cover;
  width: 40px;
  height: 40px;
  margin-right: 8px;
`;
export const FileInput = styled.input`
  width: 0;
  height: 0;
`;
export const Input = styled.input`
  font-size: ${FONT.h3};
`;
export const NoBorderLabel = styled(EditLabel)`
    position: absolute;
    height: 40px;
    width: 40px;
`;
export const AddBanner = styled.div`
  background: url(${addBtn}) center/cover;
  position: absolute;
  z-index: 1;
  bottom: 5px;
  right: 5px;
  height: 40px;
  width: 40px;
`;
export const Avatar = styled.div`
  width: 192px;
  height: 192px;
  background: #5c5c5c;
  background: ${props => props.avatar ? `url(${props.avatar}) center/cover;` : ''};
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  z-index: 0;
`;
export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 130px;
`;
export const Name = styled.div`
  margin-top: 15px;
  font-size: ${FONT.logo};
  margin-bottom: 40px;
  letter-spacing: 2px;
`;
export const ArticleCounter = styled.div``;
export const InfoContainer = styled(ProfileContainer)`
  align-items: center;
  margin-top: -110px;
  margin-bottom: 0;
`;
export const AddAvatar = styled(AddBanner)`
  bottom: 0;
  right: 0;
`;
export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 220px;
  width: 220px;
`;
export const EditingGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
export const EditName = styled.button`
  font-size: ${FONT.h3};
  color: ${COLOR.text_gray};
  border: 1px solid #013328;
  border-radius: 25px;
  padding: 15px 30px;
  margin-bottom: 30px;
`;
export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 40px;
`;
export const SaveBtn = styled.button`
  font-size: ${FONT.h3};
  color: ${COLOR.primary};
  overflow: hidden;
  background-color: ${COLOR.btn};
  border-radius: 25px;
  padding: 10px 25px;
`;
export const CancelBtn = styled(SaveBtn)`
  background-color: transparent;
  border: 1px solid black;
  color: ${COLOR.text_gray};
  margin-left: 40px;
`;
// export function Profile() {
//   return (
//     <ProfileContainer>
//       <Banner>
//         <AddBanner />
//       </Banner>
//       <InfoContainer>
//         <AvatarContainer>
//           <Avatar />
//           <AddAvatar />
//         </AvatarContainer>
//         <Name>rich</Name>
//         <EditingGroup>
//           <EditName>編輯名稱</EditName>
//           <BtnContainer>
//             <SaveBtn>儲存</SaveBtn>
//             <CancelBtn>取消</CancelBtn>
//           </BtnContainer>
//         </EditingGroup>
//         <ArticleCounter>共有 1 篇食記</ArticleCounter>
//       </InfoContainer>
//     </ProfileContainer>
//   );
// }
