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
  const [postsData, setPostsData] = useState([]);
  const [defaultBanner, setDefaultBanner] = useState("");
  const [defaultAvatar, setDefaultAvatar] = useState("");
  const [postCounts, setPostCounts] = useState("");
  const [filter, setFilter] = useState("createdAt");
  const unpublished = "false";
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (isLoading) return;
    setIsLoading(true);
    fetchUserData(id).then((result) => {
      if (!result.data) {
        setIsError(true);
        setIsLoading(false);
        return;
      }
      setNickname(result.data.nickname);
      setDefaultBanner(result.data.background_pic_url || null);
      setDefaultAvatar(result.data.picture_url || null);
    });
    fetchPostsByUserId(id, 0, filter, unpublished).then((result) => {
      setPostCounts(result.count);
      setPostsData(result.rows);
      setIsLoading(false);
    });
  }, [id]);

  // useEffect(() => {
  //   setPage(0);
  //   fetchPostsByUserId(id, 0, filter, unpublished).then((result) => {
  //     setPostsData(result.rows);
  //   });
  // }, [filter]);

  useEffect(() => {
    if (page === 0) return;
    if (page % 5 !== 0) return;
    fetchPostsByUserId(id, page, filter, unpublished).then((result) => {
      setPostsData((prev) => [...new Set([...prev, ...result.rows])]);
    });
  }, [page]);

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
      <Article
        setPage={setPage}
        postsData={postsData}
        profilePage={true}
        setFilter={setFilter}
      />
    </Wrapper>
  );
}

export default ProfilePage;
