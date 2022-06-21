import Rnd from "react-rnd";
import React from "react";

import Editor from "./TinyEditor";

export default ({ id, x, y, mode }) => {
  return (
    <Rnd
      default={{
        x,
        y,
        height: "100px",
        width: "300px"
      }}
      bounds="#template_body"
    >
      <Editor id={id} mode={mode} />
    </Rnd>
  );
};
