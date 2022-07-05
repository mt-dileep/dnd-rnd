import { useState } from "react";
import React from "react";

import { useDrop } from "react-dnd";

import { ItemTypes } from "./ItemTypes";
import Card from "./Card";
// import Editor from "./QuillEditorRnD";
import Editor from "./TinyEditorRnd";
// import { templateHTML } from "../src/data/Existing";

const ITEM_TYPE = {
  // [ItemTypes.WIDGET]: Widget,
  [ItemTypes.CARD]: Card,
  [ItemTypes.TEXT]: Editor,
};

export default ({ pos, bg, mode, setTemplate, template }) => {
  const [allRef, setRefs] = useState([]);

  const updateConfig = (id, newState) => {
    setTemplate((prevState) => {
      return {
        ...prevState,
        [id]: {
          ...prevState[id],
          ...newState,
        },
      };
    });
  };

  const deleteInstance = (id) => {
    setTemplate((prevState) => {
      delete prevState[id];
      return { ...prevState };
    });
  };

  const duplicateTemplate = (id) => {
    setTemplate((prevState) => {
      console.log(prevState);
      const itemToBeDuplicated = prevState[id];
      // console.log("itemToBeDuplicated", prevState);
      const uniqueId = `${itemToBeDuplicated.code}_${Date.now()}`;
      const newDroppedEl = {
        ...prevState,
        [uniqueId]: {
          ...itemToBeDuplicated,
          id: uniqueId,
        },
      };
      return newDroppedEl;
    });
  };

  // useEffect(() => {
  //   console.log("all Elements in drop zone: ", template);
  // }, [template]);

  console.log("all Elements in drop zone: ", template);

  const [{ isOver, isOverCurrent }, drop] = useDrop(
    () => ({
      accept: [ItemTypes.CARD, ItemTypes.WIDGET, ItemTypes.TEXT],
      drop(item, monitor) {
        // const didDrop = monitor.didDrop();
        const uniqueId = `${item.code}_${Date.now()}`;
        const newDroppedEl = {
          ...template,
          [uniqueId]: {
            id: `${item.code}_${Date.now()}`,
            ...item,
            ...pos,
            height: "auto",
            width: "150px",
            tinyMceContent: "",
          },
        };

        setTemplate(newDroppedEl);
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        isOverCurrent: monitor.isOver({ shallow: true }),
      }),
      hover: (item, monitor) => {},
    }),
    [template, setTemplate, pos]
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
      console.log("Before converting variables");
      editorRef._eventDispatcher.fire("changeHTMLToString");
      console.log("After converting variables");

      console.log("body ---  ", editorRef.getContent());
      console.log("Before setting html");
      editorRef._eventDispatcher.fire("changeToHTML");
      console.log("After setting html");
    });
  };

  console.log("Rendering elements", Object.values(template));

  return (
    <div
      style={{
        width: 950,
        background: "rgb(234 233 233)",
      }}
    >
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
        {Object.values(template).length > 0 &&
          Object.values(template).map(
            (
              { id, x, y, type, name, height, width, tinyMceContent },
              index
            ) => {
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
                  deleteInstance={deleteInstance}
                  duplicateTemplate={duplicateTemplate}
                />
              );
            }
          )}
      </div>
      <button onClick={convertAll}>convertAll</button>
    </div>
  );
};
