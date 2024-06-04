import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("authToken") || sessionStorage.getItem("authToken") || null,
  user: {
    email: "",
    firstName: "",
    lastName: "",
    userName: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      const { token, rememberMe } = action.payload;
      state.token = token;
      if (rememberMe) {
        localStorage.setItem("authToken", token);
      } else {
        sessionStorage.setItem("authToken", token);
      }
    },
    setUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
    setUsername: (state, action) => {
      state.user.userName = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.user = initialState.user;
      localStorage.removeItem("authToken");
      sessionStorage.removeItem("authToken");
    },
  },
});

export const { setToken, setUser, setUsername, logout } = authSlice.actions;

export default authSlice.reducer;
