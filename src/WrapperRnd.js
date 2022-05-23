import { useState } from "react";
import React from "react";

import { useDrop } from "react-dnd";

import { ItemTypes } from "./ItemTypes";
import Card from "./Card";
import Var from "./VariableRnd";

const ITEM_TYPE = {
  [ItemTypes.VAR]: Var,
  [ItemTypes.CARD]: Card
};
export default ({ pos }) => {
  const [cards, setCards] = useState([]);
  // const [pos, setPosition] = useState({ x: 0, y: 0 });

  const [{ isOver, isOverCurrent }, drop] = useDrop(
    () => ({
      accept: [ItemTypes.CARD, ItemTypes.VAR],
      drop(item, monitor) {
        // const didDrop = monitor.didDrop();
        // const pos = getPos();
        console.log("pos", pos);
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
      ref={drop}
      style={{ width: 700, height: 500, backgroundColor }}
      id="template_body"
    >
      {cards.map(({ id, x, y, type, name }, index) => {
        const Component = ITEM_TYPE[type];
        return (
          <Component id={id} name={name} key={`${id}_${index}}`} x={x} y={y} />
        );
      })}
    </div>
  );
};
