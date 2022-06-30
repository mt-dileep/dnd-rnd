import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

import "./plugins/tinymce.css";
import "./plugins/tooltip.css";

const VariableMenu = [
  { text: "Name", value: "{{name}}" },
  { text: "Award Date", value: "{{award_date}}" },
  { text: "Expired On", value: "{{expired_On}}" },
];
const VariableMapper = {
  name: "Name",
  award_date: "Award Date",
  expired_On: "Expired On",
};
const VariableDesc = {
  name: "Learner's Name",
  award_date: "The Date on which certificate will be awarded",
  expired_On: "Certificate expiration date",
};

export default function TinyEditor({
  id,
  mode,
  addRef,
  tinyMceContent,
  updateConfig,
}) {
  const editorRef = useRef(null);
  // const cb = () => {
  //   editorRef.current._eventDispatcher.fire("changeHTMLToString");
  //   console.log(
  //     "save position: ",
  //     editorRef.current.selection.getBoundingClientRect()
  //   );
  //   console.log("body ---  ", editorRef.current.getBody());
  //   // console.log("dom : ", document.querySelector(`#${id}`));
  // };

  const onChange = (value) => {
    updateConfig(id, { tinyMceContent: value });
  };

  return (
    <Editor
      id={id}
      apiKey="4eipi8mfr092w22jp2qz0jnl1ljmu8k29ku9e04g4x93xaqz"
      onInit={(evt, editor) => ((editorRef.current = editor), addRef(editor))}
      value={tinyMceContent}
      onEditorChange={onChange}
      init={{
        menubar: false,
        placeholder: "Add your text here.",
        inline: true,
        external_plugins: {
          variables: "/plugins/variables.js",
        },
        fixed_toolbar_container: "#toolbar",
        toolbar:
          "undo redo | fontfamily fontsize |  bold italic backcolor | alignleft aligncenter " +
          "alignright alignjustify | bullist numlist outdent indent | variablesDD",
        font_family_formats:
          "Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Oswald=oswald; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",
        content_style:
          "@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');",
        // content_style:
        //   "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        content_css: [
          "https://fonts.googleapis.com/css?family=Open+Sans:400,600",
        ],
        // font_family_formats:
        //   "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black",
        variable_mapper: VariableMapper,
        variable_desc: VariableDesc,
        init_instance_callback: (editor) => {
          console.log("Inside Init instance", Object.assign({}, editor));
        },
        setup: function (editor) {
          console.log("Inside setup instance", Object.assign({}, editor));
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
                  },
                };
              });
              callback(items);
            },
          });
          editor.on("init", function () {
            editor.ui.show();
            editor.focus();
          });
          editor.ui.registry.addContextToolbar("textselection", {
            predicate: (node) => !editor.selection.isCollapsed(),
            items: "bold italic | blockquote",
            position: "selection",
            scope: "node",
          });
        },
      }}
    />
  );
}
