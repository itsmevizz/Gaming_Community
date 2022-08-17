import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const getFollowers = createAsyncThunk("/followers", async () => {
  try {
    const response = await api.followers();
    return response.data;
  } catch (err) {}
});

const friendsSlice = createSlice({
  name: "myFriends",
  initialState: {
    friends: null,
    error: false,
    loading: false,
  },
  extraReducers: {
    [getFollowers.pending]: (state, action) => {
      state.loading = true;
    },
    [getFollowers.fulfilled]: (state, action) => {
      state.friends = action.payload;
      state.loading = false;
    },
    [getFollowers.rejected]: (state, action) => {
      state.error = true;
    },
  },
});

export default friendsSlice.reducer;
