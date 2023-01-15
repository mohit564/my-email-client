// reducers
import emailReducer from "./slices/emailSlice";

export const rootReducer = {
  reducer: {
    email: emailReducer,
  },
};
