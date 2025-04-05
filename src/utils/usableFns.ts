import { COMMENT_TEMPLATES, USER_NAMES } from "./constants";

let userIdCounter = 1;

export const generateRandomUser = () => {
  const name = USER_NAMES[Math.floor(Math.random() * USER_NAMES.length)];
  return {
    id: userIdCounter++,
    userName: name,
    userAvatar: "",
  };
};

export const generateRandomComment = () => {
  return COMMENT_TEMPLATES[
    Math.floor(Math.random() * COMMENT_TEMPLATES.length)
  ];
};
