/* eslint-disable */
import React, { useState } from "react";
import { Wrapper } from "../../../constants/globalStyle";
import { Navbar } from "../../../components/Navbar";
import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
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
function EditPage() {
  const userState = useSelector(selectUser);
  if (userState.result) {
    const { userId } = userState.result.data
  } else {
    const userId = 4
  }
  const [images, setImages] = useState([])
  const [restaurantId, setRestaurantId] = useState('999')
  const [title, setTitle] = useState('aaa1')
  const [content, setContent] = useState('bbb')
  const [visitedDate, setVisitedDate] = useState('2021-09-29')
  const [isPublished, setIsPublished] = useState(true)
  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }
  const handleDateChange = (e) => {
    setVisitedDate(e.target.value)
  }
  const previewImage = (e) => {
    console.log(e.target.files)
    const checkedList = [
      "image/jpeg",
      "image/png",
      "image/jpg",
    ]
    if (!checkedList.some(key => Object.values(e.target.files).every(each => each.type.includes(key)))) {
      console.log('! image')
      return
    }
    const maxImages = 3
    const filesArr = []
    for (let i = 0; i < e.target.files.length; i++) {
      if (i >= maxImages) break
      filesArr.push(URL.createObjectURL(e.target.files.item(i)))
    }
    console.log(filesArr[0])
    setImages(filesArr)
    Array.from(e.target.files).map(each => URL.revokeObjectURL(each))
  }
  const renderImages = () => {
    return images.map(each => {
      return (
        <ImgBox>
          <Img src={each} key={each} />
        </ImgBox>
      )
    })
  }
  const sendPost = async () => {
    const postData = {}
    const blobArr = []
    if (images.length) {
      for (let i = 0; i < images.length; i++) {
        let blob = await fetch(images[i]).then(result => result.blob());
        console.log(blob.arrayBuffer())
        blobArr.push(blob)
      }
      postData.images = blobArr
    }
    postData.user_id = userId
    postData.restaurant_id = restaurantId
    postData.title = title
    postData.content = content
    postData.visited_time = visitedDate
    postData.is_published = isPublished

    fetchAddPost(postData)
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
            <Input type="date" onChange={handleDateChange} />
          </EditLabel>
          <EditLabel>
            <Span></Span>
            {/* <Input placeholder="選擇餐廳" /> */}
            <PopUp placeHolder="選擇餐廳" />
          </EditLabel>
          <EditLabel>
            <Span></Span>
            <Input placeholder="食記標題" onChange={handleTitleChange} />
          </EditLabel>
          <NoBorderLabel>
            <Span></Span>
            <FileInput type="file" multiple="multiple" accept="image/jpg, image/jpeg, image/png" onChange={previewImage} />
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
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        />
        <SubmitButton>
          <Button>儲存</Button>
          <Button onClick={sendPost}>發表食記</Button>
        </SubmitButton>
      </EditContainer>
    </Wrapper>
  );
}

export default EditPage;
