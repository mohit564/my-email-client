import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./reducers";

export const store = configureStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
