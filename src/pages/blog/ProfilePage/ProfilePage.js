import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../../../components/Navbar";
import { Wrapper } from "../../../constants/globalStyle";
import {
  ProfileContainer,
  Banner,
  AddBanner,
  InfoContainer,
  AvatarContainer,
  Avatar,
  AddAvatar,
  Name,
  EditingGroup,
  SaveBtn,
  ArticleCounter,
  FileInput,
  NoBorderLabel,
  Input,
  Span,
  EditLabel,
} from "./ProfilePageStyled";
import { Article } from "../../../components/Article";
import { fetchUserData, fetchPostsByUserId } from "../../../WebAPI";
import useEditUserData from "../../../hooks/useEditUserData";
import useConfirmUser from "../../../hooks/useConfirmUser";
import useParseData from "../../../hooks/useParseData";
import useScroll from "../../../hooks/useScroll";
import useLoading from "../../../hooks/useLoading";
import Loading from "../../../components/Loading/Loading";
import Error from "../../../components/Error/Error";
import useError from "../../../hooks/useError";

function ProfilePage() {
  const { id } = useParams();
  const { isLoading, setIsLoading } = useLoading();
  const { isError, setIsError } = useError();
  const confirmUser = useConfirmUser(id);
  const {
    avatar,
    setAvatar,
    banner,
    setBanner,
    uploadImages,
    nickname,
    setNickname,
    handleInputChange,
    handleSubmit,
  } = useEditUserData();
  const { parseResult, setParseResult } = useParseData();
  const scroll = useScroll();
  const [defaultBanner, setDefaultBanner] = useState("");
  const [defaultAvatar, setDefaultAvatar] = useState("");
  const [postCounts, setPostCounts] = useState("");
  const [filter, setFilter] = useState("createdAt");
  const [offset, setOffset] = useState(0);
  const [clientHeight, setClientHeight] = useState(document.body.clientHeight);
  const screenHeight = window.screen.availHeight;
  const unpublished = "false";

  useEffect(() => {
    if (isLoading) return;
    setIsLoading(true);
    fetchUserData(id).then((result) => {
      if (!result.data){
        setIsLoading(false);
        setIsError(true)
        return
      } 
      setNickname(result.data.nickname);
      if (result.data.background_pic_url)
        setDefaultBanner(result.data.background_pic_url);
      if (result.data.picture_url) setDefaultAvatar(result.data.picture_url);
    });
    fetchPostsByUserId(id, offset, filter, unpublished).then((result) => {
      setPostCounts(result.count);
      // 這邊等後端改成 left join 會更好處理
      setParseResult(result.rows);
    });
    setIsLoading(false);
  }, [id]);

  useEffect(() => {
    fetchPostsByUserId(id, 0, filter, unpublished).then((result) => {
      setParseResult(result.rows);
      setOffset(0);
    });
  }, [filter]);

  useEffect(() => {
    if (offset === 0) return;
    fetchPostsByUserId(id, offset, filter, unpublished).then((result) => {
      setParseResult(parseResult.concat(result.rows));
      setIsLoading(false);
    });
  }, [offset]);

  useEffect(() => {
    if (isLoading) return;
    if (clientHeight - scroll.y - screenHeight / 2 >= screenHeight / 2) return;
    if (postCounts > offset) {
      setIsLoading(true);
      setOffset(offset + 5);
    }
  }, [scroll]);

  useEffect(() => {
    setClientHeight(document.body.clientHeight);
  }, [parseResult]);

  return (
    <Wrapper>
      <Navbar />
      {isLoading && <Loading />}
      {isError && <Error />}
      <ProfileContainer>
        <Banner banner={banner ? banner : defaultBanner}>
          {confirmUser && (
            <AddBanner>
              <NoBorderLabel>
                <FileInput
                  type="file"
                  accept="image/jpg, image/jpeg, image/png"
                  onChange={uploadImages(setBanner)}
                />
              </NoBorderLabel>
            </AddBanner>
          )}
        </Banner>
        <InfoContainer>
          <AvatarContainer>
            <Avatar avatar={avatar ? avatar : defaultAvatar} />
            {confirmUser && (
              <AddAvatar>
                <NoBorderLabel>
                  <FileInput
                    type="file"
                    accept="image/jpg, image/jpeg, image/png"
                    onChange={uploadImages(setAvatar)}
                  />
                </NoBorderLabel>
              </AddAvatar>
            )}
          </AvatarContainer>
          <Name>{nickname}</Name>
          {confirmUser && (
            <EditingGroup>
              <EditLabel>
                <Span></Span>
                <Input
                  placeholder="編輯名稱"
                  onChange={handleInputChange(setNickname)}
                />
              </EditLabel>
              <SaveBtn onClick={handleSubmit}>儲存</SaveBtn>
            </EditingGroup>
          )}
          <ArticleCounter>共有 {postCounts} 篇食記</ArticleCounter>
        </InfoContainer>
      </ProfileContainer>
      <Article postsData={parseResult} setFilter={setFilter} />
    </Wrapper>
  );
}

export default ProfilePage;
