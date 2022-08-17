import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const getPersonalMsg = createAsyncThunk("/personalMsg", async (id) => {
  try {
    const response = await api.personalMsg(id);
    return response.data;
  } catch (err) {}
});

const personalMsgSlice = createSlice({
  name: "myFriends",
  initialState: {
    message: null,
    error: false,
    loading: false,
  },
  extraReducers: {
    [getPersonalMsg.pending]: (state, action) => {
      state.loading = true;
    },
    [getPersonalMsg.fulfilled]: (state, action) => {
      state.message = action.payload;
      state.loading = false;
    },
    [getPersonalMsg.rejected]: (state, action) => {
      state.error = true;
    },
  },
});

export default personalMsgSlice.reducer;
