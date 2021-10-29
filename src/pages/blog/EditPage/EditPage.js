import React, { useEffect, useLayoutEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
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
  DateInput,
  TitleInput,
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
import useGetId from "../../../hooks/useGetId";
import usePost from "../../../hooks/usePost";
import { fetchPostByPostId } from "../../../WebAPI";

function EditPage() {
  const pathname = useLocation().pathname;
  const { id } = useParams();
  const { userId } = useGetId();
  const {
    isLoading,
    images,
    uploadImages,
    setImages,
    title,
    setTitle,
    content,
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
    if (!userId) return;
    if (pathname.includes("edit")) {
      setPostId(id);
      fetchPostByPostId(id, userId).then((result) => {
        setImages(
          result.Pictures.reduce((reducer, val) => {
            reducer.push(val.food_picture_url);
            return reducer;
          }, [])
        );
        setTitle(result.title);
        content.current = result.content;
        setVisitedDate(result.visited_time);
        isPublished.current = result.is_published;
        setRestaurantId(result.restaurant_id);
      });
    }
  }, [userId]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [handleSubmit]);
  const handleDraft = () => {
    isPublished.current = false;
    handleSubmit();
  };

  const renderImages = () => {
    if (!images) return;
    if (!images.length) return;
    return images.map((each) => (
      <ImgBox key={each}>
        <Img src={each} />
      </ImgBox>
    ));
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
            <DateInput
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
            <TitleInput
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
          data={content.current ? content.current : ""}
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
            content.current = data;
          }}
        />
        <SubmitButton>
          <Button onClick={handleDraft}>儲存</Button>
          <Button
            onClick={() => {
              isPublished.current = true;
              handleSubmit();
            }}
          >
            發表食記
          </Button>
        </SubmitButton>
      </EditContainer>
    </Wrapper>
  );
}

export default EditPage;
