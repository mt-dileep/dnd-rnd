import React, { useRef } from "react";

import { Editor } from "@tinymce/tinymce-react";

export default function App({ height, mode }) {
  const editorRef = useRef(null);

  return mode !== "Read" ? (
    <div>
      <Editor
        apiKey="4eipi8mfr092w22jp2qz0jnl1ljmu8k29ku9e04g4x93xaqz"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={editorRef.current ? editorRef.current.getContent() : null}
        init={{
          height: 200,
          menubar: false,
          //   inline: true,
          // plugins: [
          //   "advlist autolink lists link image charmap print preview anchor",
          //   "searchreplace visualblocks code fullscreen",
          //   "insertdatetime media table paste code help wordcount"
          // ],
          toolbar_sticky: true,
          fixed_toolbar_container: "#toolbar",
          // toolbar: false,
          //   "undo redo | formatselect | " +
          //   "bold italic backcolor | alignleft aligncenter " +
          //   "alignright alignjustify | bullist numlist outdent indent | " +
          //   "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
      />
    </div>
  ) : (
    <div>{editorRef.current ? editorRef.current.getContent() : null}</div>
  );
}
