import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light", 
};


export const themeSlice = createSlice({
  name: "theme",
  initialState: initialState, 
  reducers: {
    toggleTheme: (state) => (state === "light" ? "dark" : "light"),
    setTheme: (state, action) => action.payload, // Permite establecer un tema específico
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;

export default themeSlice.reducer;