import React from "react";
import { useDrag } from "react-dnd";

const style = {
  display: "inline-block",
  border: "1px dashed gray",
  padding: "0.5rem 1rem",
  backgroundColor: "white",
  cursor: "move",
  margin: "0.2rem",
};
export const Dragme = ({ code, type, name }) => {
  const [collected, drag, dragPreview] = useDrag(() => ({
    type,
    item: { code, type, name },
    // end(item, monitor) {
    //   console.log("end called", item.code);
    // },
    options: { dropEffect: "copy" },
  }));

  return collected.isDragging ? (
    <div ref={dragPreview} />
  ) : (
    <div ref={drag} {...collected} style={style}>
      {name ? name : type}
    </div>
  );
};
