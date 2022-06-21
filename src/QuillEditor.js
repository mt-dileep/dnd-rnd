import React from "react";
// import Description from "@mindtickle/description";
// export default (args) => <Description {...args} heading="Description" />;

import ReactQuill from "react-quill";
import "react-quill/dist/quill.core.css";
import "react-quill/dist/quill.snow.css";

/*
 * Event handler to be attached using Quill toolbar module (see line 73)
 * https://quilljs.com/docs/modules/toolbar/
 */
function insertStar() {
  const cursorPosition = this.quill.getSelection().index;
  this.quill.insertText(cursorPosition, "★");
  this.quill.setSelection(cursorPosition + 1);
}


class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorHtml: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(html) {
    this.setState({ editorHtml: html });
  }

  render() {
    return (
      <div className="text-editor">
        {/* <CustomToolbar /> */}
        <ReactQuill
          onChange={this.handleChange}
          placeholder={this.props.placeholder}
          modules={Editor.modules}
          formats={Editor.formats}
          theme={"snow"} // pass false to use minimal theme
        />
      </div>
    );
  }
}

Editor.modules = {
  toolbar: {
    container: "#toolbar",
    handlers: {
      insertStar: insertStar
    }
  }
};

Editor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color"
];

// Editor.propTypes = {
//   placeholder: PropTypes.string
// };

export default Editor;
