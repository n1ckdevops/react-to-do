/** @format */

import { RootState } from "../store";

export const saveToLocalStorage = (state: RootState) => {
  try {
    const appState = JSON.stringify(state);
    localStorage.setItem("appState", appState);
  } catch (e) {
    console.warn(e);
  }
};

export const loadFromLocalStorage = () => {
  try {
    const appState = localStorage.getItem("appState"); // Получаем состояние из localStorage
    if (!appState) return undefined; // Возвращаем undefined если нет состояния в localStorage
    return JSON.parse(appState);
  } catch (e) {
    console.warn(e); // Если не удалось загрузить состояние, возвращаем undefined
    return undefined; // Возвращаем undefined в случае ошибки
  }
}; /** @format */
