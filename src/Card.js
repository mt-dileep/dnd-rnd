import Rnd from "react-rnd";
import React from "react";

export const Card = ({ id }) => (
  <div>
    <article>
      <p>
        <strong>Name {id} </strong> <small>@name</small>
        <br />
        This card can be resized and dragged anywhere in this window
      </p>
    </article>
  </div>
);

export default ({ id, x, y }) => {
  return (
    <Rnd
      style={{ backgroundColor: "white" }}
      default={{
        x,
        y,
        height: "100px",
        width: "300px"
      }}
      minWidth={300}
      minHeight={100}
      bounds="#template_body"
    >
      <Card id={id} />
    </Rnd>
  );
};
