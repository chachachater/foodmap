/* eslint-disable */
import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
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
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import 'ckeditor5-custom-build/build/ckeditor.css';
import useAddPost from "../../../hooks/useAddPost";
import { fecthPostByPostId } from "../../../WebAPI";

function EditPage() {
  let pathname = useLocation().pathname
  console.log(location.pathname)
  const { id } = useParams()
  const {
    images,
    uploadImages,
    setImages,
    title,
    setTitle,
    content,
    setContent,
    visitedDate,
    setVisitedDate,
    setIsPublished,
    restaurantId,
    setRestaurantId,
    getResaurantId,
    setPostId,
    handleInputChange,
    handleSubmit
  } = useAddPost();
  useEffect(() => {
    if (pathname.includes('edit')) {
      setPostId(id)
      fecthPostByPostId(id).then(result => {
        console.log(result)
        setImages(result.images)
        setTitle(result.post.title)
        setContent(result.post.content)
        setVisitedDate(result.post.visited_time)
        setIsPublished(result.post.is_published)
        setRestaurantId(result.post.restaurant_id)
      })
    }
  }, [])
  const handleDraft = async () => {
    setIsPublished(false)
    return handleSubmit()
  }
  const renderImages = () => {
    if(!images.length) return
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
            <Input type="date" value={visitedDate} onChange={handleInputChange(setVisitedDate)} />
          </EditLabel>
          <EditLabel>
            <Span></Span>
            <PopUp placeHolder="選擇餐廳" restaurantId={restaurantId} getResaurantId={getResaurantId(setRestaurantId)} />
          </EditLabel>
          <EditLabel>
            <Span></Span>
            <Input placeholder="食記標題" value={title} onChange={handleInputChange(setTitle)} />
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
          data={ content ? content : "<p>Hello from FoodMap!</p>"}
          onReady={editor => {
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
            setContent(data)
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
