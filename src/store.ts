/** @format */

import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./feature/todoList";
import { themeSlice } from "./feature/themeList";
import { inputSlice } from "./feature/form";
import { loadFromLocalStorage, saveToLocalStorage } from "./helpers/storage";

export const store = configureStore({
  reducer: {
    todoList: todoSlice.reducer, // Добавляем редюсер для списка задач
    inputForm: inputSlice.reducer, // Добавляем редюсер для формы
    themeList: themeSlice.reducer,
  },
  preloadedState: loadFromLocalStorage(), // Загружаем состояние из localStorage при инициализации
});

store.subscribe(() => {
  saveToLocalStorage(store.getState());
}); // Сохраняем состояние в localStorage

export type RootState = ReturnType<typeof store.getState>; // Тип для состояния всего приложения
export type AppDispatch = typeof store.dispatch; // Тип для dispatch
