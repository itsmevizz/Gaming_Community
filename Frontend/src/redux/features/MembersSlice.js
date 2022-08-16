import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const getMembers = createAsyncThunk("/members", async () => {
  try {
    const response = await api.members();
    return response.data;
  } catch (err) {}
});

export const refreshMembers = createAsyncThunk("/members", async () => {
  try {
    const response = await api.members();
    return response.data;
  } catch (err) {}
});

const membersSlice = createSlice({
  name: "members",
  initialState: {
    members: null,
    error: false,
    loading: false,
  },
  extraReducers: {
    [getMembers.pending]: (state, action) => {
      state.loading = true;
    },
    [getMembers.fulfilled]: (state, action) => {
      state.loading = false;
      state.members = action.payload;
    },
    [getMembers.rejected]: (state, action) => {
      state.error = true;
    },
    [refreshMembers.pending]: (state, action) => {
      state.loading = false;
    },
    [refreshMembers.fulfilled]: (state, action) => {
      state.loading = false;
      state.members = action.payload;
    },
    [refreshMembers.rejected]: (state, action) => {
      state.error = true;
    },
  },
});

export default membersSlice.reducer;
