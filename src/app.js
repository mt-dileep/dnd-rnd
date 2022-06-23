import { useState } from "react";
import React from "react";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Dragme } from "./DragMe";
import RndWrapper from "./WrapperRnd";
import { ItemTypes } from "./ItemTypes.js";
const BG = [
  "https://i.pinimg.com/564x/f4/67/27/f467276a4c7c75ea0ad3d53b7ad02f25.jpg",
  "https://i.pinimg.com/564x/e2/92/60/e292609cb6b3381066226fe232cf9c6f.jpg",
  "https://i.pinimg.com/564x/00/95/03/009503673a05a6e66f584e0ae2296112.jpg"
];
const style = {
  display: "inline-block",
  padding: "0.5rem 1rem",
  backgroundColor: "#3f6f9f",
  margin: "0.2rem",
  borderRadius: "10px",
  color: "white"
};
export default () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [bg, setBg] = useState(null);
  const [mode, setMode] = useState("Edit");
  return (
    <div
      id="dnd"
      style={{ width: 950, height: 700, background: "#fcfcfc" }}
      onDragOver={(e) => {
        // console.log("drag ", e.pageX, e.pageY);
        setPos({ x: e.pageX, y: e.pageY });
      }}
    >
      <DndProvider backend={HTML5Backend}>
        <RndWrapper pos={pos} bg={bg} mode={mode} />
        <Dragme id={1} type={ItemTypes.CARD} />
        <Dragme id={"id"} type={ItemTypes.TEXT} />
        <Dragme id={2} type={ItemTypes.WIDGET} name={"name"} />
        <div style={{ float: "right" }}>
          <button
            style={style}
            onClick={() => {
              const tb = document.getElementById("template_body");
              console.log("body: ", tb);
            }}
          >
            Print body
          </button>
          <button
            style={style}
            onClick={() => setBg(BG[Math.trunc(Math.random() * 3)])}
          >
            Set Background
          </button>
          <button
            style={style}
            onClick={() => setMode(mode === "Edit" ? "Read" : "Edit")}
          >
            Toggle Mode
          </button>
        </div>
      </DndProvider>
    </div>
  );
};
