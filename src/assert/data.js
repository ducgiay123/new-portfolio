const currentURL = window.location.href;
const cardData = [
  {
    workType: "Virtual Reality",
    name: "VR Simulation",
    webLink: "https://www.digi-mode.eu/construction-training.html",
    performType: "Video",
    day: "",
    imgLink: require("./image/VR.jpg"),
  },
  {
    workType: "5G Telecommunication",
    name: "CCA Testing",
    webLink:
      "https://www.theseus.fi/bitstream/handle/10024/800397/PulishedVersionDucTrung.pdf?sequence=2&isAllowed=y",
    performType: "Thesis",
    day: "",
    imgLink: require("./image/5G.jpg"),
  },
  {
    workType: "Embedded System",
    name: "LED16x2 Game",
    webLink: currentURL + "embedgame",
    performType: "Video",
    day: "",
    imgLink: require("./image/embedded.jpg"),
  },
  {
    workType: "Web Application",
    name: "Todo app",
    webLink: currentURL + "todo",
    performType: "Website",
    day: "",
    imgLink: require("./image/todo.jpg"),
  },
  {
    workType: "Front End",
    name: "Dashboard",
    webLink: "",
    performType: "Website",
    day: "",
    imgLink: require("./image/Dashboard.jpg"),
  },
  {
    workType: "Virtual Reality",
    name: "Solar Panel",
    webLink: "",
    performType: "Video",
    day: "",
    imgLink: require("./image/VRconstruction.jpg"),
  },
  {
    workType: "Web Application",
    name: "Loving Web",
    webLink: "",
    performType: "webside",
    day: "",
    imgLink: require("./image/LovingWeb.jpg"),
  },
];
export default cardData;
