import { useEffect, useState } from "react";
import React from "react";

import { useDrop } from "react-dnd";

import { ItemTypes } from "./ItemTypes";
import Card from "./Card";
// import Editor from "./QuillEditorRnD";
import Editor from "./TinyEditorRnd";
import Widget from "./WidgetRnd";
import Toolbar from "./Toolbar";
// import { templateHTML } from "../src/data/Existing";

const ITEM_TYPE = {
  [ItemTypes.WIDGET]: Widget,
  [ItemTypes.CARD]: Card,
  [ItemTypes.TEXT]: Editor,
};

export default ({ pos, bg, mode, template }) => {
  const [droppedElements, setElements] = useState({});
  const [allRef, setRefs] = useState([]);

  useEffect(() => {
    setElements(template);
  }, [template]);

  const updateConfig = (id, newState) => {
    setElements((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        ...newState,
      },
    }));
  };

  useEffect(() => {
    console.log("all Elements in drop zone: ", droppedElements);
  }, [droppedElements]);

  const [{ isOver, isOverCurrent }, drop] = useDrop(
    () => ({
      accept: [ItemTypes.CARD, ItemTypes.WIDGET, ItemTypes.TEXT],
      drop(item, monitor) {
        console.log(pos);
        // const didDrop = monitor.didDrop();
        const newDroppedEl = {
          ...droppedElements,
          [`${item.id}_${Date.now()}`]: {
            ...item,
            id: `${item.id}_${Date.now()}`,
            ...pos,
            height: "80px",
            width: "200px",
            tinyMceContent: ''
          },
        };

        setElements(newDroppedEl);
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        isOverCurrent: monitor.isOver({ shallow: true }),
      }),
      hover: (item, monitor) => {},
    }),
    [droppedElements, setElements, pos]
  );
  let borderStyle = "";
  let borderColor = "";
  if (isOverCurrent || isOver) {
    borderStyle = "groove";
    borderColor = "cadetblue";
  }
  let background = bg ? `url(${bg}) 0% 0% / cover` : "";

  const addRef = (ref) => {
    setRefs([...allRef, ref]);
  };
  const convertAll = () => {
    allRef.forEach((editorRef) => {
      editorRef._eventDispatcher.fire("changeHTMLToString");
      console.log(
        "save position: ",
        editorRef.selection.getBoundingClientRect()
      );
      console.log("body ---  ", editorRef.getBody());
      console.log("body ---  ", editorRef.selection.getContent());
      // console.log("dom : ", document.querySelector(`#${id}`));
    });
  };
  // if(data){
  //   return
  // }
  return (
    <div
      style={{
        width: 950,
      }}
    >
      <Toolbar />
      <div
        ref={drop}
        style={{
          width: 950,
          height: 700,
          background,
          borderColor,
          borderStyle,
        }}
        id="template_body"
      >
        {Object.values(droppedElements).map(
          ({ id, x, y, type, name, height, width, tinyMceContent }, index) => {
            const Component = ITEM_TYPE[type];
            return (
              <Component
                id={id}
                name={name}
                key={`${id}_${index}}`}
                x={x}
                y={y}
                mode={mode}
                addRef={addRef}
                height={height}
                width={width}
                updateConfig={updateConfig}
                tinyMceContent={tinyMceContent}
              />
            );
          }
        )}
      </div>
      <button onClick={convertAll}>convertAll</button>
    </div>
  );
};
