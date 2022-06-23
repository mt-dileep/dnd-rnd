import React from "react";
import { useDrag } from "react-dnd";

const style = {
  display: "inline-block",
  border: "1px dashed gray",
  padding: "0.5rem 1rem",
  backgroundColor: "white",
  cursor: "move",
  margin: "0.2rem"
};
export const Dragme = ({ id, type, name }) => {
  const [collected, drag, dragPreview] = useDrag(() => ({
    type,
    item: { id, type, name },
    end(item, monitor) {
      console.log("end called", item.id);
    },
    options: { dropEffect: "copy" }
  }));
  console.log(collected.isDragging);
  return collected.isDragging ? (
    <div ref={dragPreview} />
  ) : (
    <div ref={drag} {...collected} style={style}>
      {name ? name : type}
    </div>
  );
};
