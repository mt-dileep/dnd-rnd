import Rnd from "react-rnd";
import React from "react";
import { useEffect } from "react";
import getInstance from "@mindtickle/mt-widget-engine/dist/widget";
import { widget } from "./widget";

const widgetEngine = getInstance();

export const Var = ({ name }) => {
  useEffect(() => {
    widgetEngine.render(widget, document.getElementById("_widget_"), {
      useConfigParser: true
      // ...rendererConfig
    });
  }, []);
  return null; //<div style={{ color: "green" }}>{name}</div>;
};

export default ({ id, x, y, name }) => {
  return (
    <Rnd
      style={{ background: "white" }}
      default={{
        x,
        y,
        height: "30px",
        width: "100px"
      }}
      minWidth={100}
      minHeight={30}
      bounds="window"
    >
      <div id={`_widget_`}>
        <Var id={id} name={name} />
      </div>
    </Rnd>
  );
};
