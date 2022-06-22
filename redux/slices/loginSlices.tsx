import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserFb } from "../../type/tpye";

type initialStateType = {
  userFb: IUserFb;
};

const userFb: IUserFb = {
  token: "",
  avatar: "",
  name: "",
  userID: "",
  email: ""
};

const initialState: initialStateType = {
  userFb,

};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logInFb: (state, action: PayloadAction<IUserFb>) => {
      state.userFb.name = action.payload.name;
      state.userFb.token = action.payload.token;
      state.userFb.avatar = action.payload.avatar;
      state.userFb.userID = action.payload.userID;
      state.userFb.email = action.payload.email
    },
   
    logOutFB: (state, action: PayloadAction<IUserFb>) => {
      state.userFb.name = "";
      state.userFb.avatar = "";
      state.userFb.userID = "";
      state.userFb.token = "";
    },
  },
});
export const { logInFb, logOutFB } = loginSlice.actions;
export default loginSlice.reducer;
