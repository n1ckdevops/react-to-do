/** @format */

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ToDo } from "../models/todo-item";

export interface ToDoState {
  // Интерфейс состояния ToDo, который содержит массив задач
  todos: ToDo[];
}

const initialState: ToDoState = {
  // Начальное состояние с пустым массивом задач
  todos: [],
};

export const todoSlice = createSlice({
  // Создаем срез для управления состоянием ToDo
  name: "todoList",
  initialState,
  reducers: {
    createAction: (state, action: PayloadAction<string>) => {
      // Создаем действие для добавления новой задачи
      const newToDo: ToDo = {
        // Создаем новый объект задачи
        id: state.todos.length, // Используем длину массива как уникальный идентификатор
        text: action.payload, // Получаем текст задачи из действия
        isDone: false, // Задача изначально не выполнена
      };
      state.todos = [...state.todos, newToDo]; // Добавляем новую задачу в массив
    },
    updateAction: (state, action: PayloadAction<ToDo>) => {
      const updated = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          // Если идентификатор задачи совпадает с идентификатором в действии
          todo.isDone = !todo.isDone; // Переключаем состояние выполнения задачи
        }
        return todo;
      });
      state.todos = updated;
    },
    deleteAction: (state, action: PayloadAction<ToDo>) => {
      const deleted = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );
      state.todos = deleted; // Фильтруем массив задач, исключая удаленную задачу
    },
  },
});

export const { createAction, updateAction, deleteAction } = todoSlice.actions;

export default todoSlice.reducer;
