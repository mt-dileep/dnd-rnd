import React from "react";
const style = {
  display: "inline-block",
  padding: "0.5rem 1rem",
  backgroundColor: "#3f6f9f",
  margin: "0.2rem",
  borderRadius: "10px",
  color: "white",
};

const BG = [
  "https://i.pinimg.com/564x/f4/67/27/f467276a4c7c75ea0ad3d53b7ad02f25.jpg",
  "https://i.pinimg.com/564x/e2/92/60/e292609cb6b3381066226fe232cf9c6f.jpg",
  "https://i.pinimg.com/564x/00/95/03/009503673a05a6e66f584e0ae2296112.jpg",
];

const templateConfig = {
  TM_1656320679419: {
    id: "TM_1656320679419",
    type: "Text",
    x: 532,
    y: 57,
    height: 67,
    width: 417,
    tinyMceContent: "<p>arhsiM uhsnamiH si eman ym ,yeH</p>",
  },
  TM_1656320712942: {
    id: "TM_1656320712942",
    type: "Text",
    x: 536,
    y: 339,
    height: "80px",
    width: "200px",
    tinyMceContent: "<p>e;kcitdnim t akrw I</p>",
  },
  TM_1656320731959: {
    id: "TM_1656320731959",
    type: "Text",
    x: 18,
    y: 312,
    height: "80px",
    width: "200px",
    tinyMceContent: "<p>em daer ro oem ees tnac uoy</p>",
  },
  TM_1656320805170: {
    id: "TM_1656320805170",
    type: "Text",
    x: 150,
    y: 105,
    height: 10,
    width: 780,
    tinyMceContent:
      "<p><span style=\"font-family: 'arial black', sans-serif;\"><span style=\"font-family: 'courier new', courier, monospace;\"><strong>fdsfdscc</strong>fdsfdsfsdfds</span>dffdfdfdsddfsdfdsfsdfdshshagsdhshshhjhdsgha</span>dsdsasdssdsadsadadsadadsads&nbsp; sddssssdasdsadsadsa</p>",
  },
};

export default ({ setBg, setMode, mode, setTemplate }) => {
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
      <button style={style} onClick={() => setTemplate(templateConfig)}>
        Load Template
      </button>
    </div>
  );
};
