import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchLoginStatus,
  fetchRegister,
  fetchLogin,
  fetchLogout,
} from "../../WebAPI";

const initialState = {
  result: "",
  status: "idle",
};

export const getMe = () => (dispatch) => {
  fetchLoginStatus().then((result) => {
    if (!result.ok) return dispatch(setMe(""));
    return dispatch(setMe(result));
  });
};

export const registerAsync = createAsyncThunk(
  "user/register",
  async (userData) => {
    let result = "";
    result = await fetchRegister(userData);
    return result;
  }
);

export const loginAsync = createAsyncThunk("user/login", async (userData) => {
  let result = "";
  result = await fetchLogin(userData);
  return result;
});

export const logoutAsync = createAsyncThunk("user/logout", async () => {
  await fetchLogout();
  return "";
});

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setMe: (state, action) => {
      state.result = action.payload;
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
      .addCase(logoutAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(logoutAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.result = action.payload;
      });
  },
});

export const { setMe } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
