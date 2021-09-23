import React from "react";
import { Wrapper } from "../../../constants/globalStyle";
import { Navbar } from "../../../components/Navbar";
import {} from "./EditPageStyle";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";


function EditPage() {
  return (
    <Wrapper>
      <Navbar />
      <EditContainer>
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

      </EditContainer>
    </Wrapper>
  );
}

export default EditPage;
