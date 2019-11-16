import faker from "faker";
import { categories } from "./components/SortFilter/Filter/dummyCategories";
export const datePostCreated = new Date();
export const firstPost = {
  type: "issue",
  category: categories[Math.floor(Math.random() * categories.length)],
  postID: faker.random.number(40),
  headline: "Manure on Cesar Chavez",
  description:
    "I stepped in it, and I cant stop crying. Please clean it up. And I could also use a professional cleaner now.",
  created_at: faker.date.recent(7),
  location: "123 Cesar Chavez",
  upvotes: 22,
  username: faker.name.findName(),
  status: "resolved",
  disputed: 0,
  resolved: 0,
  favorited: true
};

export const secondPost = {
  type: "event",
  category: categories[Math.floor(Math.random() * categories.length)],
  postID: faker.random.number(40),
  headline: faker.random.words(7),
  description: faker.random.words(),
  created_at: faker.date.recent(7),
  event_date: faker.date.future(7),
  location: "123 Cesar Chavez",
  upvotes: faker.random.number(100),
  username: faker.name.findName(),
  status: null,
  disputed: 0,
  resolved: 0,
  favorited: false
};

export const thirdPost = {
  type: "issue",
  category: categories[Math.floor(Math.random() * categories.length)],
  postID: faker.random.number(40),
  headline: faker.random.word(7),
  description: faker.random.words(30),
  created_at: faker.date.recent(7),
  location: "123 Cesar Chavez",
  upvotes: 22,
  username: faker.name.findName(),
  status: "open",
  disputed: 0,
  resolved: 0,
  favorited: false
};

export const fourthPost = {
  type: "event",
  category: categories[Math.floor(Math.random() * categories.length)],
  postID: faker.random.number(40),
  headline: "Talk about all the Horses on Cesar Chavez",
  description: "Town hall meeting about Horses on Cesar Chavez.",
  created_at: faker.date.recent(7),
  event_date: faker.date.future(7),
  location: "123 Cesar Chavez",
  upvotes: faker.random.number(100),
  username: faker.name.findName(),
  status: "disputed",
  disputed: 0,
  resolved: 0,
  favorited: false
};

export const fifthPost = {
  type: "issue",
  category: categories[Math.floor(Math.random() * categories.length)],
  postID: faker.random.number(40),
  headline: faker.random.word(7),
  description: faker.random.words(30),
  created_at: faker.date.recent(7),
  location: "123 Cesar Chavez",
  upvotes: 22,
  username: faker.name.findName(),
  status: "open",
  disputed: 0,
  resolved: 0,
  favorited: false
};

export const sixthPost = {
  type: "issue",
  category: categories[Math.floor(Math.random() * categories.length)],
  postID: faker.random.number(40),
  headline: faker.random.word(7),
  description: faker.random.words(30),
  created_at: faker.date.recent(7),
  location: "123 Cesar Chavez",
  upvotes: 22,
  username: faker.name.findName(),
  status: "open",
  disputed: 0,
  resolved: 0,
  favorited: false
};

export const seventhPost = {
  type: "event",
  category: categories[Math.floor(Math.random() * categories.length)],
  postID: faker.random.number(40),
  headline: faker.random.words(7),
  description: faker.random.words(30),
  created_at: faker.date.recent(7),
  event_date: faker.date.future(7),
  location: "123 Cesar Chavez",
  upvotes: faker.random.number(100),
  username: faker.name.findName(),
  status: null,
  disputed: 0,
  resolved: 0,
  favorited: false
};

export const eighthPost = {
  type: "event",
  category: categories[Math.floor(Math.random() * categories.length)],
  postID: faker.random.number(40),
  headline: "Talk about all the Horses on Cesar Chavez",
  description: "Town hall meeting about Horses on Cesar Chavez.",
  created_at: datePostCreated,
  event_date: faker.date.future(7),
  location: "123 Cesar Chavez",
  upvotes: faker.random.number(100),
  username: faker.name.firstName(),
  status: null,
  disputed: 0,
  resolved: 0,
  favorited: true
};

export const ninthPost = {
  type: "issue",
  category: categories[Math.floor(Math.random() * categories.length)],
  postID: faker.random.number(40),
  headline: faker.random.word(7),
  description: faker.random.words(30),
  created_at: faker.date.recent(7),
  location: "123 Cesar Chavez",
  upvotes: 22,
  username: faker.name.findName(),
  status: "open",
  disputed: 0,
  resolved: 0,
  favorited: false
};

export const tenthPost = {
  type: "issue",
  category: categories[Math.floor(Math.random() * categories.length)],
  postID: faker.random.number(40),
  headline: faker.random.word(7),
  description: faker.random.words(30),
  created_at: faker.date.recent(7),
  location: "123 Cesar Chavez",
  upvotes: 22,
  username: faker.name.findName(),
  status: "open",
  disputed: 0,
  resolved: 0,
  favorited: false
};

export const allIssues = [
  firstPost,
  secondPost,
  thirdPost,
  fourthPost,
  fifthPost,
  sixthPost,
  seventhPost,
  eighthPost,
  ninthPost,
  tenthPost
];
