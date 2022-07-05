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
  deleteInstance,
  duplicateTemplate,
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
          "fontfamily fontsize forecolor | backcolor bold italic underline | alignleft aligncenter " +
          "alignright alignjustify | bullist numlist | variablesDD | duplicateTinyMceInstance deleteTinyMceInstance",
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
        setup: function (editor) {
          editor.ui.registry.addIcon(
            "triangleUp",
            `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20.1438 9.625C20.1438 8.45109 19.2164 7.5 18.0719 7.5H13.9281C12.7836 7.5 11.8562 8.45109 11.8562 9.625V10.3333H10.4808C10.4773 10.3333 10.4739 10.3333 10.4705 10.3333H9.78437C9.40295 10.3333 9.09375 10.6505 9.09375 11.0417C9.09375 11.4329 9.40295 11.75 9.78437 11.75H9.82168L10.4035 22.4901C10.4646 23.6178 11.3738 24.5 12.475 24.5H19.525C20.6262 24.5 21.5354 23.6178 21.5965 22.4901L22.1783 11.75H22.2156C22.597 11.75 22.9062 11.4329 22.9062 11.0417C22.9062 10.6505 22.597 10.3333 22.2156 10.3333H21.5295C21.5261 10.3333 21.5227 10.3333 21.5192 10.3333H20.1438V9.625ZM20.7949 11.75H19.4531H12.5469H11.2051L11.7827 22.4115C11.8031 22.7885 12.1069 23.0833 12.475 23.0833H19.525C19.8931 23.0833 20.1969 22.7885 20.2173 22.4115L20.7949 11.75ZM18.7625 10.3333H13.2375V9.625C13.2375 9.23349 13.5464 8.91667 13.9281 8.91667H18.0719C18.4536 8.91667 18.7625 9.23349 18.7625 9.625V10.3333Z" fill="#FF6969"/>
          </svg>`
          );
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
          editor.ui.registry.addButton("deleteTinyMceInstance", {
            icon: "triangleUp",
            tooltip: "Insert Current Element",
            onAction: function (_) {
              deleteInstance(id);
              // editor.insertContent(toTimeHtml(new Date()));
            },
          });
          editor.ui.registry.addButton("duplicateTinyMceInstance", {
            icon: "copy",
            tooltip: "Duplicate current element",
            onAction: function (_) {
              duplicateTemplate(id);
              // editor.insertContent(toTimeHtml(new Date()));
            },
          });
          editor.on("init", function () {
            editor.ui.show();
            editor.focus();
          });
        },
      }}
    />
  );
}
