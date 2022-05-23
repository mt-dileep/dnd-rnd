import { useState } from "react";
import React from "react";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Dragme } from "./DragMe";
import RndWrapper from "./WrapperRnd";
import { ItemTypes } from "./ItemTypes.js";

export default () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  return (
    <div
      id="dnd"
      onDragOver={(e) => {
        console.log("drag ", e.pageX, e.pageY);
        setPos({ x: e.pageX, y: e.pageY });
      }}
    >
      <DndProvider backend={HTML5Backend}>
        <RndWrapper pos={pos} />
        <Dragme id={1} type={ItemTypes.CARD} />
        <Dragme id={2} type={ItemTypes.VAR} name={"name"} />
        <Dragme id={3} type={ItemTypes.VAR} name={"cname"} />
        <Dragme id={4} type={ItemTypes.VAR} name={"date"} />
        <button
          onClick={() => {
            const tb = document.getElementById("template_body");
            console.log("tb: ", tb);
          }}
        >
          Log Template body
        </button>
      </DndProvider>
    </div>
  );
};
