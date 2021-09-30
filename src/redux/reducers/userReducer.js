/* eslint-disable */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchRegister, fetchLogin, getMe, fetchSuccess, fetchLogout } from "../../WebAPI";

const initialState = {
  result: "",
  status: "idle",
};

export const registerAsync = createAsyncThunk(
  "user/register",
  async (userData) => {
    let result = ''
    try {
      result = await fetchRegister(userData)
    } catch(err) {
      alert('操作失敗，發生錯誤')
    }
    return result
  }
);

export const loginAsync = createAsyncThunk(
  "user/login",
  async (userData) => {
    let result = ''
    try {
      result = await fetchLogin(userData)
    } catch (err) {
      alert('操作失敗，發生錯誤')
    }
    return result
});

export const successAsync = createAsyncThunk(
  "user/success",
  async () => {
    let result = ''
    try {
      result = await fetchSuccess()
    } catch (err) {
      alert('操作失敗，發生錯誤')
    }
    return result
  });

export const logoutAsync = createAsyncThunk(
  "user/logout",
  async (userData) => {
    let result = ''
    try {
      result = await fetchLogout()
    } catch (err) {
      alert('操作失敗，發生錯誤')
      console.log(err)
    }
    return result
  });

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.result = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.result = action.payload;
      })
      .addCase(loginAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.result = action.payload;

      })
      .addCase(successAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(successAsync.fulfilled, (state, action) => {
      state.status = "idle";
        state.result = action.payload;
    });
  },
});

export const { logout } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
