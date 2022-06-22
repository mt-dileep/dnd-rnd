import React, { useRef } from "react";

import { Editor } from "@tinymce/tinymce-react";
// import "tinymce-variable";

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
          inline: true,
          external_plugins: {
            variables: "http://localhost:8000/variables/plugin.min.js"
          },
          //   plugins:["variables"],
          variable_mapper: {
            account_id: "Account ID",
            email: "E-mail address"
          },
          //   toolbar_sticky: true,
          fixed_toolbar_container: "#toolbar",
          toolbar:
            "variablesDD | undo redo | formatselect | fontselect fontsizeselect |" +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          font_formats:
            "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Open Sans=Open Sans; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",

          setup: function (editor) {
            console.log("editor : ", editor);
            editor.ui.registry.addMenuButton("variablesDD", {
              text: "Insert Variable",
              tooltip: "Insert variables in Template",
              fetch: function (callback) {
                var items = [
                  { text: "Name", value: "{{name}}" },
                  { text: "Award Date", value: "{{Award Date}}" },
                  { text: "Expired On", value: "{{Expired On}}" }
                ].map(function (v) {
                  return {
                    type: "menuitem",
                    text: v.text,
                    onAction: function () {
                      editor.insertContent(v.value);
                    }
                  };
                });
                callback(items);
              }
            });
          }
        }}
      />
    </div>
  ) : (
    <div>{editorRef.current ? editorRef.current.getContent() : null}</div>
  );
}
