import { useState } from "react";
import React from "react";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Dragme } from "./DragMe";
import RndWrapper from "./WrapperRnd";
import { ItemTypes } from "./ItemTypes.js";

export default () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [bg, setBg] = useState(null);
  return (
    <div
      id="dnd"
      onDragOver={(e) => {
        console.log("drag ", e.pageX, e.pageY);
        setPos({ x: e.pageX, y: e.pageY });
      }}
    >
      <DndProvider backend={HTML5Backend}>
        <RndWrapper pos={pos} bg={bg} />
        <Dragme id={1} type={ItemTypes.CARD} />
        <Dragme id={"id"} type={ItemTypes.TEXT} />
        <Dragme id={2} type={ItemTypes.WIDGET} name={"name"} />
        <button
          onClick={() => {
            const tb = document.getElementById("template_body");
            console.log("body: ", tb);
          }}
        >
          Print body
        </button>
        <button
          onClick={() =>
            setBg(
              "https://i.pinimg.com/originals/87/f9/48/87f9484d0209a82a13ee0a8463741f50.jpg"
            )
          }
        >
          Set Background
        </button>
      </DndProvider>
    </div>
  );
};
