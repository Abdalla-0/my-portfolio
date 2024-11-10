import { createSlice } from "@reduxjs/toolkit";
import actGetSkills from "./actions/actGetSkills";
import { TLoading, TSkill, isString } from '@types';

interface ISkillsState {
    data: TSkill[],
    loading: TLoading,
    error: string | null,
}

const initialState: ISkillsState = {
    data: [],
    loading: "idle",
    error: null
}

const skillsSlice = createSlice({
    name: "skills",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(actGetSkills.pending, (state) => {
            state.loading = "pending"
            state.error = null
        })
        builder.addCase(actGetSkills.fulfilled, (state, action) => {
            state.loading = "successeded"
            state.data = action.payload

        })
        builder.addCase(actGetSkills.rejected, (state, action) => {
            state.loading = "failed"
            if (isString(action.payload)) {
                state.error = action.payload;
            }
        })
    }
});
export { actGetSkills };
export default skillsSlice.reducer;