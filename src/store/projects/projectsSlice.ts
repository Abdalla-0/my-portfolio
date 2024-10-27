import { createSlice } from "@reduxjs/toolkit";
import actGetProjects from "./actions/actGetProjects";
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
        builder.addCase(actGetProjects.pending, (state) => {
            state.loading = "pending"
            state.error = null
        })
        builder.addCase(actGetProjects.fulfilled, (state, action) => {
            state.loading = "successeded"
            state.data = action.payload

        })
        builder.addCase(actGetProjects.rejected, (state, action) => {
            state.loading = "failed"
            if (isString(action.payload)) {
                state.error = action.payload;
            }
        })
    }
});
export {actGetProjects};
export default projectsSlice.reducer;