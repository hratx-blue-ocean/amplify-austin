export const ICONLABEL = {
  accessibility: "accessibility",
  add: "add",
  car: "car",
  danger: "danger",
  events: "events",
  food: "food",
  garbage: "garbage",
  graffiti: "graffiti",
  home: "home",
  mapLogo: "mapLogo",
  mapMarker: "mapMarker",
  mapSign: "mapSign",
  message: "message",
  music: "music",
  nature: "nature",
  menu: "menu",
  parking: "parking",
  pet: "pet",
  school: "school",
  settings: "settings",
  starEmpty: "emptyStar",
  starFilled: "filledStar",
  townhall: "townhall",
  water: "water"
};

const HOST = "http://localhost:8000";
const APIBASE = HOST + "/api";

export const API = {
  HOST,
  APIBASE,
  ISSUE: APIBASE + "/issue",
  LOGIN: APIBASE + "/login",
  SIGNUP: APIBASE + "/signup",
  MAIN: APIBASE + "/main",
  AMPLIFY: APIBASE + "/modifyAmplifies"
};
