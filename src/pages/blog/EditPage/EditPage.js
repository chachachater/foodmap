import React from "react";
import { Wrapper } from "../../../constants/globalStyle";
import { Navbar } from "../../../components/Navbar";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
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
  DeleteBtn,
} from "./EditPageStyle";

function EditPage() {
  // const photos = [
  //   {
  //     src: "https://images.unsplash.com/photo-1612927601601-6638404737ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1604262590904-0039c606dc95?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1184&q=80",
  //   },
  // ];

  return (
    <Wrapper>
      <Navbar />
      <EditContainer>
        <EditInputs>
          <EditLabel>
            <Span></Span>
            <Input type="date" />
          </EditLabel>
          <EditLabel>
            <Span></Span>
            <Input placeholder="選擇餐廳" />
          </EditLabel>
          <EditLabel>
            <Span></Span>
            <Input placeholder="食記標題" />
          </EditLabel>
          <NoBorderLabel>
            <Span></Span>
            <FileInput type="file" multiple="multiple" />
            選擇照片(最多三張)
          </NoBorderLabel>
          <UnloadImg>
            <ImgBox>
              <Img src="https://images.unsplash.com/photo-1612927601601-6638404737ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" />
              <DeleteBtn></DeleteBtn>
            </ImgBox>
            <ImgBox>
              <Img src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
              <DeleteBtn></DeleteBtn>
            </ImgBox>
            <ImgBox>
              <Img src="https://images.unsplash.com/photo-1604262590904-0039c606dc95?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1184&q=80" />
              <DeleteBtn></DeleteBtn>
            </ImgBox>
          </UnloadImg>
        </EditInputs>
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          config={{
            removePlugins: [
              "CKFinder",
              "Image",
              "ImageCaption",
              "ImageStyle",
              "ImageToolbar",
              "MediaEmbed",
              "EasyImage",
              "ImageUpload",
            ],
            language: "zh",
          }}
          onReady={(editor) => {
            editor.editing.view.change((writer) => {
              writer.setStyle(
                "height",
                "400px",
                editor.editing.view.document.getRoot()
              );
            });
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
        <SubmitButton>
          <Button>儲存</Button>
          <Button>發表食記</Button>
        </SubmitButton>
      </EditContainer>
    </Wrapper>
  );
}

export default EditPage;
