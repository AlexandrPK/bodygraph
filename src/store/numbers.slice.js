import { createSlice } from "@reduxjs/toolkit";

const initialNumbersState = [
  // head
  { id: 64, color: "#555", selected: 0, idLine: 1, linePart: "before" },
  { id: 61, color: "#555", selected: 0, idLine: 2, linePart: "before" },
  { id: 63, color: "#555", selected: 0, idLine: 3, linePart: "before" },
  // ajna
  { id: 47, color: "#555", selected: 0, idLine: 1, linePart: "after" },
  { id: 24, color: "#555", selected: 0, idLine: 2, linePart: "after" },
  { id: 4, color: "#555", selected: 0, idLine: 3, linePart: "after" },
  { id: 17, color: "#555", selected: 0, idLine: 4, linePart: "before" },
  { id: 43, color: "#555", selected: 0, idLine: 5, linePart: "before" },
  { id: 11, color: "#555", selected: 0, idLine: 6, linePart: "before" },
  // throat
  { id: 62, color: "#555", selected: 0, idLine: 4, linePart: "after" },
  { id: 23, color: "#555", selected: 0, idLine: 5, linePart: "after" },
  { id: 56, color: "#555", selected: 0, idLine: 6, linePart: "after" },
  { id: 35, color: "#555", selected: 0, idLine: 18, linePart: "before" },
  { id: 12, color: "#555", selected: 0, idLine: 19, linePart: "before" },
  { id: 45, color: "#555", selected: 0, idLine: 24, linePart: "before" },
  { id: 33, color: "#555", selected: 0, idLine: 9, linePart: "before" },
  { id: 8, color: "#555", selected: 0, idLine: 8, linePart: "before" },
  { id: 31, color: "#555", selected: 0, idLine: 7, linePart: "before" },
  { id: 20, color: "#555", selected: 0, idLine: 17, linePart: "before" },
  { id: 16, color: "#555", selected: 0, idLine: 16, linePart: "before" },
  // G
  { id: 10, color: "#555", selected: 0, idLine: NaN, linePart: "after" },
  { id: 7, color: "#555", selected: 0, idLine: 7, linePart: "after" },
  { id: 1, color: "#555", selected: 0, idLine: 8, linePart: "after" },
  { id: 13, color: "#555", selected: 0, idLine: 9, linePart: "after" },
  { id: 25, color: "#555", selected: 0, idLine: 25, linePart: "before" },
  { id: 46, color: "#555", selected: 0, idLine: 12, linePart: "before" },
  { id: 2, color: "#555", selected: 0, idLine: 11, linePart: "before" },
  { id: 15, color: "#555", selected: 0, idLine: 10, linePart: "before" },
  // sacral
  { id: 5, color: "#555", selected: 0, idLine: 10, linePart: "after" },
  { id: 14, color: "#555", selected: 0, idLine: 11, linePart: "after" },
  { id: 29, color: "#555", selected: 0, idLine: 12, linePart: "after" },
  { id: 59, color: "#555", selected: 0, idLine: 22, linePart: "after" },
  { id: 9, color: "#555", selected: 0, idLine: 15, linePart: "before" },
  { id: 3, color: "#555", selected: 0, idLine: 14, linePart: "before" },
  { id: 42, color: "#555", selected: 0, idLine: 13, linePart: "before" },
  { id: 27, color: "#555", selected: 0, idLine: 21, linePart: "after" },
  { id: 34, color: "#555", selected: 0, idLine: NaN, linePart: "after" },
  // heart
  { id: 26, color: "#555", selected: 0, idLine: 20, linePart: "before" },
  { id: 51, color: "#555", selected: 0, idLine: 25, linePart: "after" },
  { id: 21, color: "#555", selected: 0, idLine: 24, linePart: "after" },
  { id: 40, color: "#555", selected: 0, idLine: 23, linePart: "before" },
  // root
  { id: 53, color: "#555", selected: 0, idLine: 13, linePart: "after" },
  { id: 60, color: "#555", selected: 0, idLine: 14, linePart: "after" },
  { id: 52, color: "#555", selected: 0, idLine: 15, linePart: "after" },
  { id: 19, color: "#555", selected: 0, idLine: 29, linePart: "after" },
  { id: 39, color: "#555", selected: 0, idLine: 30, linePart: "after" },
  { id: 41, color: "#555", selected: 0, idLine: 31, linePart: "after" },
  { id: 54, color: "#555", selected: 0, idLine: 26, linePart: "after" },
  { id: 38, color: "#555", selected: 0, idLine: 27, linePart: "after" },
  { id: 58, color: "#555", selected: 0, idLine: 28, linePart: "after" },
  // spleen
  { id: 48, color: "#555", selected: 0, idLine: 16, linePart: "after" },
  { id: 57, color: "#555", selected: 0, idLine: 17, linePart: "after" },
  { id: 44, color: "#555", selected: 0, idLine: 20, linePart: "after" },
  { id: 50, color: "#555", selected: 0, idLine: 21, linePart: "before" },
  { id: 32, color: "#555", selected: 0, idLine: 26, linePart: "before" },
  { id: 28, color: "#555", selected: 0, idLine: 27, linePart: "before" },
  { id: 18, color: "#555", selected: 0, idLine: 28, linePart: "before" },
  // solar
  { id: 36, color: "#555", selected: 0, idLine: 18, linePart: "after" },
  { id: 22, color: "#555", selected: 0, idLine: 19, linePart: "after" },
  { id: 37, color: "#555", selected: 0, idLine: 23, linePart: "after" },
  { id: 6, color: "#555", selected: 0, idLine: 22, linePart: "before" },
  { id: 49, color: "#555", selected: 0, idLine: 29, linePart: "before" },
  { id: 55, color: "#555", selected: 0, idLine: 30, linePart: "before" },
  { id: 30, color: "#555", selected: 0, idLine: 31, linePart: "before" },
];

const numbersSlice = createSlice({
  name: "numbers",
  initialState: initialNumbersState,
  reducers: {
    toggleNumber(state, action) {
      const selectedNumber = state.find(
        (number) => number.id === action.payload
      );
      if (selectedNumber) {
        if (selectedNumber.selected === 0) {
          selectedNumber.color = "#7c44c6";
          selectedNumber.selected = 1;
        } else {
          selectedNumber.color = "#555";
          selectedNumber.selected = 0;
        }
      }
    },
  },
});

export const { toggleNumber } = numbersSlice.actions;

export const selectNumbers = (state) => state.numbers;

export default numbersSlice.reducer;
