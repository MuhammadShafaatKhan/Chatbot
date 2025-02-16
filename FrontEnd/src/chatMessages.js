import { CHAT_MESSAGES } from "./constants.js";

export const getMessages = () => {
  return sessionStorage.getItem(CHAT_MESSAGES);
};

export const setMessages = (messages) => {
  if (messages) {
    sessionStorage.setItem(CHAT_MESSAGES, messages);
  }
};

export const removeMessages = () => {
  sessionStorage.removeItem(CHAT_MESSAGES);
};
