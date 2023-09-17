import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../slice/loginSlice";
import usersReducer from "../slice/usersSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    user: usersReducer,
  },
});

export default store;
