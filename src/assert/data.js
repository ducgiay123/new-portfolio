const currentURL = window.location.href;
const cardData = [
  {
    workType: "Virtual Reality",
    name: "VR Simulation",
    webLink: "https://www.digi-mode.eu/construction-training.html",
    performType: "Video",
    day: "",
    imgLink: require("./image/VR.jpg"),
    debcriptions:
      "Develop a virtual reality construction training simulation using Unity and the Oculus Quest 2 platform",
  },
  {
    workType: "5G Telecommunication",
    name: "CCA Testing",
    webLink:
      "https://www.theseus.fi/bitstream/handle/10024/800397/PulishedVersionDucTrung.pdf?sequence=2&isAllowed=y",
    performType: "Thesis",
    day: "",
    imgLink: require("./image/5G.jpg"),
    debcriptions:
      "Working on a thesis that assesses various congestion control avoidance techniques in 5G networks to determine the most effective performance strategy for this network technology",
  },
  {
    workType: "Embedded System",
    name: "LCD 16x2 Game",
    webLink: currentURL + "embedgame",
    performType: "Video",
    day: "",
    imgLink: require("./image/embedded.jpg"),
    debcriptions:
      "Develop a 2D game with Arduino and a 16x2 LCD display, with external buttons for character interaction. In this game, the character jumps to overcome obstacles and earn points",
  },
  {
    workType: "Web Application",
    name: "Todo app",
    webLink: currentURL + "todo",
    performType: "Website",
    day: "",
    imgLink: require("./image/todo.jpg"),
    debcriptions:
      "Build a to-do application in React to manage and keep track of your task list",
  },
  {
    workType: "Front End",
    name: "Dashboard",
    webLink: "",
    performType: "Website",
    day: "",
    imgLink: require("./image/Dashboard.jpg"),
    debcriptions: "",
  },
  {
    workType: "Virtual Reality",
    name: "Solar Panel",
    webLink: "",
    performType: "Video",
    day: "",
    imgLink: require("./image/VRconstruction.jpg"),
    debcriptions: "",
  },
  {
    workType: "Web Application",
    name: "Loving Web",
    webLink: "",
    performType: "webside",
    day: "",
    imgLink: require("./image/LovingWeb.jpg"),
    debcriptions: "",
  },
];
export default cardData;
