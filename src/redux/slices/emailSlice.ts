import { createSlice } from "@reduxjs/toolkit";

// types
import { EmailState } from "../../models/email";

// services
import { fetchEmailsByPage, fetchEmailById } from "../../services/email";

const initialState = {
  loading: false,
  error: null,
  list: [],
  total: 0,
  selectedEmail: null,
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

    builder.addCase(fetchEmailById.pending, (state, action) => {
      state.selectedEmail = null;

      if (action.meta.arg.id != null) {
        let index = parseInt(action.meta.arg.id);

        let selectedEmail = state.list[index - 1];
        selectedEmail = { ...selectedEmail, hasRead: !selectedEmail.hasRead };

        state.list[index - 1] = selectedEmail;

        state.selectedEmail = selectedEmail;
      }
    });

    builder.addCase(fetchEmailById.fulfilled, (state, action) => {
      state.selectedEmail = {
        ...state.selectedEmail,
        ...action.payload,
      };
    });

    builder.addCase(fetchEmailById.rejected, (state, action) => {
      console.log("Error", action.payload);

      state.selectedEmail = null;
      state.error = new Error("Something went wrong, please try again");
    });
  },
});

export default emailSlice.reducer;
