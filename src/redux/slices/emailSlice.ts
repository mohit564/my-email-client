import { createSlice } from "@reduxjs/toolkit";

import { EmailState } from "../../models/email";
import { fetchEmailsByPage } from "../../services/email";

const initialState = {
  loading: false,
  error: null,
  list: [],
  total: 0,
} as EmailState;

export const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEmailsByPage.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(fetchEmailsByPage.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;

      state.list = action.payload?.list?.map((email) => ({
        ...email,
        body: "",
        hasRead: false,
        isFavorite: false,
      }));
      state.total = action.payload.total;
    });

    builder.addCase(fetchEmailsByPage.rejected, (state, action) => {
      console.log("Error", action.payload);

      state.loading = false;
      state.error = new Error("Something went wrong, please try again");
    });
  },
});

export default emailSlice.reducer;
