import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TProject } from '@types';
import { axiosError } from "@utils/index";

type TResponse = TProject[];
const actGetData = createAsyncThunk('products/getProducts', async (_, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
        const response = await axios.get<TResponse>(`/projects`, { signal, });
        return response.data;
    } catch (error) {
        return rejectWithValue(axiosError(error))
    }
})

export default actGetData;