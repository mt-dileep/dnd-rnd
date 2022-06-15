import Rnd from "react-rnd";
import React from "react";

import Editor from "./Editor";

export default ({ id, x, y }) => {
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
      <Editor id={id} placeholder={"Write something or insert a star ★"} />
    </Rnd>
  );
};
