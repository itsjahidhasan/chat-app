import { LocalStorageKey } from "../common/local-storage-key";

export const SetUserToLocalStorage = (data: any) => {
  localStorage.setItem(LocalStorageKey.USER, JSON.stringify(data));
};

export const GetUserFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(LocalStorageKey.USER) || "");

export const SetTokenToLocalStorage = (token: string) => {
  localStorage.setItem(LocalStorageKey.TOKEN, token);
};

export const GetTokenFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem(LocalStorageKey.TOKEN) || "");
};
