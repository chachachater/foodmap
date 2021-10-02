/* eslint-disable */
import React, { useState } from "react";
import { Wrapper } from "../../../constants/globalStyle";
import { Navbar } from "../../../components/Navbar";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import PopUp from '../../../components/PopUp';
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
  Button
} from "./EditPageStyle";
import { fetchAddPost } from "../../../WebAPI";
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import 'ckeditor5-custom-build/build/ckeditor.css';
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/reducers/userReducer"
import useAddPost from "../../../hooks/useAddPost";

function EditPage() {
  const {
    images,
    uploadImages,
    setImages,
    setTitle,
    setContent,
    setVisitedDate,
    setIsPublished,
    restaurantId,
    setRestaurantId,
    getResaurantId,
    handleInputChange,
    handleSubmit
  } = useAddPost();
  const renderImages = () => {
    return images.map(each => {
      return (
        <ImgBox>
          <Img src={each} key={each} />
        </ImgBox>
      )
    })
  }
  const editorConfiguration = {
    toolbar: {
      items: [
        'heading',
        '|',
        'bold',
        'italic',
        'link',
        'bulletedList',
        'numberedList',
        '|',
        'blockQuote',
        'insertTable',
        'undo',
        'redo'
      ]
    }
  }
  return (
    <Wrapper>
      <Navbar />
      <EditContainer>
        <EditInputs>
          <EditLabel>
            <Span></Span>
            <Input type="date" onChange={handleInputChange(setVisitedDate)} />
          </EditLabel>
          <EditLabel>
            <Span></Span>
            <PopUp placeHolder="選擇餐廳" restaurantId={restaurantId} getResaurantId={getResaurantId(setRestaurantId)} />
          </EditLabel>
          <EditLabel>
            <Span></Span>
            <Input placeholder="食記標題" onChange={handleInputChange(setTitle)} />
          </EditLabel>
          <NoBorderLabel>
            <Span></Span>
            <FileInput type="file" multiple="multiple" accept="image/jpg, image/jpeg, image/png" onChange={uploadImages(setImages)} />
            選擇照片(最多三張)
          </NoBorderLabel>
          <UnloadImg>
            {renderImages()}
          </UnloadImg>
        </EditInputs>
        <CKEditor
          editor={Editor}
          config={editorConfiguration}
          data="<p>Hello from FoodMap!</p>"
          onReady={editor => {
            editor.editing.view.change((writer) => {
              writer.setStyle(
                "height",
                "400px",
                editor.editing.view.document.getRoot()
              );
            });
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
            setContent(data)
          }}
        />
        <SubmitButton>
          <Button>儲存</Button>
          <Button onClick={handleSubmit}>發表食記</Button>
        </SubmitButton>
      </EditContainer>
    </Wrapper>
  );
}

export default EditPage;
