import { atom } from "recoil";

export const messages = atom({
  key: "messages",
  default: [],
});

export const dark = atom({
  key: "darkTheme",
  default: false,
});

export const hasError = atom({
  key: "hasError",
  default: false,
});

export const errorInfo = atom({
    key:'errorInfo',
    default:'',
})