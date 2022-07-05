import { useState } from "react";
import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Dragme } from "./DragMe";
import RndWrapper from "./WrapperRnd";
import { ItemTypes } from "./ItemTypes.js";
import Actions from "./Actions.js";
import Toolbar from "./Toolbar";
import useTemplate from "./useTemplate";

export default () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [bg, setBg] = useState(null);
  const [mode, setMode] = useState("Edit");
  const { template, setTemplate } = useTemplate();
  return (
    <div
      id="dnd"
      style={{ width: 950, height: 700 }}
      onDragOver={(e) => {
        setPos({ x: e.pageX, y: e.pageY });
      }}
    >
      <Toolbar />
      <DndProvider backend={HTML5Backend}>
        <RndWrapper
          pos={pos}
          bg={bg}
          mode={mode}
          template={template}
          setTemplate={setTemplate}
        />
        <Dragme code={"TM"} type={ItemTypes.TEXT} />
        <Actions
          setBg={setBg}
          setMode={setMode}
          mode={mode}
          setTemplate={setTemplate}
        />
        {/* <Dragme id={1} type={ItemTypes.CARD} /> */}
        {/* <Dragme id={2} type={ItemTypes.WIDGET} name={"name"} /> */}
      </DndProvider>
    </div>
  );
};
