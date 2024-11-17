import { createSlice } from "@reduxjs/toolkit";

interface IThemeState {
    bgColor: string;
    textColor: string;
}

const initialState: IThemeState = {
    bgColor: "#ffb700",
    textColor: "#2b3035"
}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.bgColor = action.payload.bgColor;
            state.textColor = action.payload.textColor;
        }
    },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;