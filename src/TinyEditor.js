import React, { useRef } from "react";

import { Editor } from "@tinymce/tinymce-react";
// import "tinymce-variable";
const VariableMenu = [
  { text: "Name", value: "{{name}}" },
  { text: "Award Date", value: "{{award_date}}" },
  { text: "Expired On", value: "{{expired_On}}" }
];
const VariableMapper = {
  name: "Name",
  award_date: "Award Date",
  expired_On: "Expired On"
};
const Var_Desc = {
  name: "Learner's Name",
  award_date: "The Date on which certificate will be awarded"
};

export default function App({ height, mode }) {
  const editorRef = useRef(null);
  const cb = () => {
    editorRef.current._eventDispatcher.fire("changeHTMLToString");
  };
  return mode !== "Read" ? (
    <div>
      <div>
        <Editor
          apiKey="4eipi8mfr092w22jp2qz0jnl1ljmu8k29ku9e04g4x93xaqz"
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue={
            editorRef.current ? editorRef.current.getContent() : null
          }
          init={{
            height: 200,
            menubar: false,
            inline: true,
            external_plugins: {
              variables: "http://localhost:8000/variables/plugin.min.js"
            },
            //   plugins:["variables"],

            //   toolbar_sticky: true,
            fixed_toolbar_container: "#toolbar",
            toolbar:
              "variablesDD | undo redo | formatselect | fontselect fontsizeselect |" +
              "bold italic backcolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            content_css: [
              "http://localhost:8000/variables/tooltip.css",
              "http://localhost:8000/variables/tinymce5-content.css",
              "https://fonts.googleapis.com/css?family=Open+Sans:400,600"
            ],
            // font_formats:
            //   "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Open Sans=Open Sans; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",
            variable_mapper: VariableMapper,
            variable_desc: Var_Desc,
            setup: function (editor) {
              editor.ui.registry.addMenuButton("variablesDD", {
                text: "Add Variable",
                tooltip: "Insert variables in Template",
                fetch: function (callback) {
                  const items = VariableMenu.map(function (v) {
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
              editor.on("init", function () {
                editor.ui.show();
              });
            }
          }}
        />
      </div>
      <button onClick={cb}>call me</button>
    </div>
  ) : (
    <div>{editorRef.current ? editorRef.current.getContent() : null}</div>
  );
}
