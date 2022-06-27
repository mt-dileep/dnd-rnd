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
      bounds="#template_body"
    >
      <Editor
        id={id}
        mode={mode}
        addRef={addRef}
        tinyMceContent={tinyMceContent}
        updateConfig={updateConfig}
      />
    </Rnd>
  );
};
