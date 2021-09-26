/* eslint-disable */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchRegister, fetchLogin, getMe, fetchSuccess, fetchLogout } from "../../WebAPI";

const initialState = {
  data: "",
  status: "idle",
};

export const registerAsync = createAsyncThunk(
  "user/register",
  async (userData) => {
    const result = await fetchRegister(userData);
    return result
  }
);

export const loginAsync = createAsyncThunk(
  "user/login",
  async (userData) => {
  const result = await fetchLogin(userData);
  console.log(result)
  return result;
});

export const successAsync = createAsyncThunk(
  "user/success",
  async () => {
    const result = await fetchSuccess();
    console.log(result)
    return result;
  });

export const logoutAsync = createAsyncThunk(
  "user/logout",
  async (userData) => {
    const result = await fetchLogout();
    console.log(result)
    return result;
  });

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.data = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      })
      .addCase(loginAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      })
      .addCase(successAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(successAsync.fulfilled, (state, action) => {
      state.status = "idle";
      state.data = action.payload;
    });
  },
});

export const { logout } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
