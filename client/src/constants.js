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
  other: "other",
  parking: "parking",
  pets: "pets",
  school: "school",
  settings: "settings",
  starEmpty: "emptyStar",
  starFilled: "filledStar",
  townhall: "townhall",
  water: "water"
};

export const CATEGORIES = [
  "Category",
  "Accessibility",
  "Danger",
  "Event",
  "Garbage",
  "Graffiti",
  "Music",
  "Nature",
  "Parking",
  "Pets",
  "School",
  "Townhall",
  "Water",
  "Other"
];

const HOST =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000"
    : "http://ec2-3-15-215-157.us-east-2.compute.amazonaws.com";
const APIBASE = HOST + "/api";

export const API = {
  HOST,
  APIBASE,
  ISSUE: APIBASE + "/issue",
  LOGIN: APIBASE + "/login",
  SIGNUP: APIBASE + "/signup",
  MAIN: APIBASE + "/main",
  AMPLIFY: APIBASE + "/modifyAmplifies",
  FAVORITE: APIBASE + "/modifyFavorite",
  RESOLVE: APIBASE + "/markResolved",
  DISPUTE: APIBASE + "/dispute",
  CATEGORIES: APIBASE + "/categories"
};
