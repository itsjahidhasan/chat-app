import { LocalStorageKey } from "../common/local-storage-key";

export const SetUserToLocalStorage = (data: any) => {
  localStorage.setItem(LocalStorageKey.USER, JSON.stringify(data));
};

export const GetUserFromLocalStorage = () => {
  return localStorage.getItem(LocalStorageKey.USER)
    ? JSON.parse(localStorage.getItem(LocalStorageKey.USER) || "")
    : "";
};

export const SetTokenToLocalStorage = (token: string) => {
  localStorage.setItem(LocalStorageKey.TOKEN, token);
};

export const GetTokenFromLocalStorage = () => {
  return localStorage.getItem(LocalStorageKey.TOKEN);
};

export const DeleteTokenAndLocalStorage = () => {
  localStorage.removeItem(LocalStorageKey.USER);
  localStorage.removeItem(LocalStorageKey.TOKEN);
};
