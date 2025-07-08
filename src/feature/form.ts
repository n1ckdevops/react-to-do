/** @format */

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface formState {
  // Интерфейс состояния формы
  value: string; // Значение поля ввода
}

const initialState: formState = {
  // Начальное состояние формы
  value: "", // Значение поля ввода
};

export const inputSlice = createSlice({
  name: "inputForm",
  initialState,
  reducers: {
    update: (state, action: PayloadAction<string>) => {
      // Обновляем состояние формы
      state.value = action.payload; // Устанавливаем новое значение поля ввода
    },
  },
});

// Action creators are generated for each case reducer function
export const { update } = inputSlice.actions;

export default inputSlice.reducer;
