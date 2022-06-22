import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./slices/loginSlices";
export const store = configureStore({
  reducer: {
    addToken: loginSlice.reducer,
    
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
