import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/reducers/userReducer";
import { Wrapper } from "../../../constants/globalStyle";
import { Navbar } from "../../../components/Navbar";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import PopUp from "../../../components/PopUp/PopUp";
import Loading from "../../../components/Loading/Loading";

import {
  EditContainer,
  EditInputs,
  EditLabel,
  Span,
  Input,
  FileInput,
  NoBorderLabel,
  UnloadImg,
  ImgBox,
  Img,
  SubmitButton,
  Button,
} from "./EditPageStyle";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import "ckeditor5-custom-build/build/ckeditor.css";
import usePost from "../../../hooks/usePost";
import { fetchPostByPostId } from "../../../WebAPI";

function EditPage() {
  let pathname = useLocation().pathname;
  const { id } = useParams();
  const userState = useSelector(selectUser);
  const {
    isLoading,
    images,
    uploadImages,
    setImages,
    title,
    setTitle,
    content,
    setContent,
    visitedDate,
    setVisitedDate,
    isPublished,
    restaurantId,
    setRestaurantId,
    getRestaurantId,
    setPostId,
    handleInputChange,
    handleSubmit,
    restaurantName,
    setRestaurantName,
  } = usePost();
  useEffect(() => {
    if (pathname.includes("edit")) {
      setPostId(id);
      fetchPostByPostId(id, userState.result.data.userId).then((result) => {
        console.log(result);
        setImages(result.images);
        setTitle(result.post.title);
        setContent(result.post.content);
        setVisitedDate(result.post.visited_time);
        isPublished.current = result.post.is_published;
        setRestaurantId(result.post.restaurant_id);
      });
    }
  }, []);
  const handleDraft = () => {
    isPublished.current = false;
    handleSubmit();
  };
  const renderImages = () => {
    if (!images.length) return;
    return images.map((each) => {
      return (
        <ImgBox key={each}>
          <Img src={each} />
        </ImgBox>
      );
    });
  };
  const editorConfiguration = {
    toolbar: {
      items: [
        "heading",
        "|",
        "bold",
        "italic",
        "link",
        "bulletedList",
        "numberedList",
        "|",
        "blockQuote",
        "insertTable",
        "undo",
        "redo",
      ],
    },
  };
  return (
    <Wrapper>
      <Navbar />
      {isLoading && <Loading />}
      <EditContainer>
        <EditInputs>
          <EditLabel>
            <Span></Span>
            <Input
              type="date"
              value={visitedDate}
              onChange={handleInputChange(setVisitedDate)}
            />
          </EditLabel>
          <EditLabel>
            <Span></Span>
            <PopUp
              placeHolder="選擇餐廳"
              restaurantId={restaurantId}
              getRestaurantId={getRestaurantId(setRestaurantId)}
              restaurantName={restaurantName}
              setRestaurantName={setRestaurantName}
            />
          </EditLabel>
          <EditLabel>
            <Span></Span>
            <Input
              placeholder="食記標題"
              value={title}
              onChange={handleInputChange(setTitle)}
            />
          </EditLabel>
          <NoBorderLabel>
            <Span></Span>
            <FileInput
              type="file"
              multiple="multiple"
              accept="image/jpg, image/jpeg, image/png"
              onChange={uploadImages(setImages)}
            />
            選擇照片(至少選擇一張圖片)
          </NoBorderLabel>
          <UnloadImg>{renderImages()}</UnloadImg>
        </EditInputs>
        <CKEditor
          editor={Editor}
          config={editorConfiguration}
          data={content ? content : ""}
          onReady={(editor) => {
            editor.editing.view.change((writer) => {
              writer.setStyle(
                "height",
                "400px",
                editor.editing.view.document.getRoot()
              );
            });
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            setContent(data);
          }}
        />
        <SubmitButton>
          <Button onClick={handleDraft}>儲存</Button>
          <Button onClick={handleSubmit}>發表食記</Button>
        </SubmitButton>
      </EditContainer>
    </Wrapper>
  );
}

export default EditPage;
