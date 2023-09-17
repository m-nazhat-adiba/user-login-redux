import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userData = createAsyncThunk("user/userData", async () => {
  const response = await axios.get("https://reqres.in/api/users?page=2");
  return response.data;
});

const userDataSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.data;
      })
      .addCase(userData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default userDataSlice.reducer;
