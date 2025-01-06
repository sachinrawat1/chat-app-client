import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface authState {
  token: string;
}

const initialState: authState = {
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      console.log(action);
      localStorage.setItem("token", action.payload);
      state.token = action.payload;
    },
  },
});

export const { setToken } = authSlice.actions;

export default authSlice.reducer;
