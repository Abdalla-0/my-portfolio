import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TSkill } from '@types';
import { axiosError } from "@utils/index";

type TResponse = TSkill[];
const actGetSkills = createAsyncThunk('skills/actGetSkills', async (_, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
        const response = await axios.get<TResponse>(`/skills`, { signal });
        return response.data;
    } catch (error) {
        return rejectWithValue(axiosError(error))
    }
})

export default actGetSkills;