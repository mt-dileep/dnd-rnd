import Rnd from "react-rnd";
import React from "react";

import Editor from "./TinyEditor";

export default ({
  id,
  x,
  y,
  mode,
  addRef,
  updateConfig,
  deleteInstance,
  duplicateTemplate,
  height,
  width,
  tinyMceContent,
}) => {
  return (
    <Rnd
      id={id}
      default={{
        x,
        y,
        height,
        width,
      }}
      onDragStop={(obj, { node: { id }, x, y }) => {
        updateConfig(id, { x, y });
      }}
      onResizeStop={(e, dir, refToElement, delta, position) => {
        updateConfig(refToElement.id, {
          height: refToElement.offsetHeight,
          width: refToElement.offsetWidth,
        });
      }}
      enableUserSelectHack={false}
      enableResizing={{
        top: false,
        right: true,
        bottom: false,
        left: true,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false,
      }}
      resizeHandleClasses={{ left: "resize-handle", right: "resize-handle" }}
      bounds="#template_body"
    >
      <Editor
        id={id}
        mode={mode}
        addRef={addRef}
        tinyMceContent={tinyMceContent}
        deleteInstance={deleteInstance}
        duplicateTemplate={duplicateTemplate}
        updateConfig={updateConfig}
      />
    </Rnd>
  );
};
