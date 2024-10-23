import { createSlice } from "@reduxjs/toolkit";
import actGetData from "./actions/actGetData";
import { TLoading, TProject, isString } from '@types';

interface IProjectsState {
    data: TProject[],
    loading: TLoading,
    error: string | null,
}

const initialState: IProjectsState = {
    data: [],
    loading: "idle",
    error: null
}

const projectsSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(actGetData.pending, (state) => {
            state.loading = "pending"
            state.error = null
        })
        builder.addCase(actGetData.fulfilled, (state, action) => {
            state.loading = "successeded"
            state.data = action.payload

        })
        builder.addCase(actGetData.rejected, (state, action) => {
            state.loading = "failed"
            if (isString(action.payload)) {
                state.error = action.payload;
            }
        })
    }
});
// export const {  } = ProjectSlice.actions;
export default projectsSlice.reducer;