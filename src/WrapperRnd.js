import { useState } from "react";
import React from "react";

import { useDrop } from "react-dnd";

import { ItemTypes } from "./ItemTypes";
import Card from "./Card";
import Editor from "./EditorRnD";
import Widget from "./WidgetRnd";
import Toolbar from "./Toolbar";

const ITEM_TYPE = {
  [ItemTypes.WIDGET]: Widget,
  [ItemTypes.CARD]: Card,
  [ItemTypes.TEXT]: Editor
};
export default ({ pos, bg }) => {
  const [cards, setCards] = useState([]);
  // const [pos, setPosition] = useState({ x: 0, y: 0 });

  const [{ isOver, isOverCurrent }, drop] = useDrop(
    () => ({
      accept: [ItemTypes.CARD, ItemTypes.WIDGET, ItemTypes.TEXT],
      drop(item, monitor) {
        // const didDrop = monitor.didDrop();
        // const pos = getPos();
        // console.log("pos", pos);
        const ncards = [...cards, { ...item, ...pos }];
        console.log("card", ncards);
        setCards(ncards);
        // setPosition(getPos());
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        isOverCurrent: monitor.isOver({ shallow: true })
      }),
      hover: (item, monitor) => {
        // setPosition(getPos());
        // console.log("hover", mousex, mousey);
      }
    }),
    [cards, setCards, pos]
  );
  let backgroundColor = "rgba(0, 0, 0, .1)";
  if (isOverCurrent || isOver) {
    backgroundColor = "grey";
  }

  return (
    <div
      style={{
        width: 700
      }}
    >
      <Toolbar />
      <div
        ref={drop}
        style={{
          width: 700,
          height: 500,
          backgroundColor,
          background: bg ? `url(${bg})` : "",
          "background-size": bg ? "cover" : ""
        }}
        id="template_body"
      >
        {cards.map(({ id, x, y, type, name }, index) => {
          const Component = ITEM_TYPE[type];
          return (
            <Component
              id={id}
              name={name}
              key={`${id}_${index}}`}
              x={x}
              y={y}
            />
          );
        })}
      </div>
    </div>
  );
};
