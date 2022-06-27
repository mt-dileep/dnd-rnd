import React from "react";
const style = {
  display: "inline-block",
  padding: "0.5rem 1rem",
  backgroundColor: "#3f6f9f",
  margin: "0.2rem",
  borderRadius: "10px",
  color: "white"
};

const BG = [
  "https://i.pinimg.com/564x/f4/67/27/f467276a4c7c75ea0ad3d53b7ad02f25.jpg",
  "https://i.pinimg.com/564x/e2/92/60/e292609cb6b3381066226fe232cf9c6f.jpg",
  "https://i.pinimg.com/564x/00/95/03/009503673a05a6e66f584e0ae2296112.jpg"
];
export default ({ setBg, setMode, mode }) => {
  return (
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
  );
};
