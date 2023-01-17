import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// types
import { Email, EmailState } from "../../models/email";

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
  reducers: {
    handleFavoriteButtonClick: (state, action: PayloadAction<string>) => {
      const id = action.payload;

      const index = state.list.findIndex((email) => email.id === id);

      if (index !== -1) {
        let email = state.selectedEmail as Email;
        email = { ...email, isFavorite: !email?.isFavorite };

        state.list[index] = email;
        state.selectedEmail = email;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEmailsByPage.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(fetchEmailsByPage.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;

      state.list =
        action.payload.list?.map((email) => ({
          ...email,
          body: "",
          hasRead: false,
          isFavorite: false,
        })) ?? [];

      state.total = action.payload.total ?? 0;
    });

    builder.addCase(fetchEmailsByPage.rejected, (state, action) => {
      console.log("Error", action.payload);

      state.loading = false;
      state.error = new Error("Something went wrong, please try again");
    });

    builder.addCase(fetchEmailById.pending, (state, action) => {
      const { id = "" } = action.meta.arg;

      const index = state.list.findIndex((email) => email.id === id);

      if (index !== -1) {
        let email = state.list[index];
        email = { ...email, hasRead: !email.hasRead };

        state.list[index] = email;
        state.selectedEmail = email;
      }
    });

    builder.addCase(fetchEmailById.fulfilled, (state, action) => {
      const index = state.list.findIndex(
        (email) => email.id === action.payload.id
      );

      if (index !== -1) {
        const email = {
          ...state.selectedEmail,
          ...action.payload,
        };

        state.list[index] = email;
        state.selectedEmail = email;
      }
    });

    builder.addCase(fetchEmailById.rejected, (state, action) => {
      console.log("Error", action.payload);

      state.selectedEmail = null;
      state.error = new Error("Something went wrong, please try again");
    });
  },
});

export const { handleFavoriteButtonClick } = emailSlice.actions;

export default emailSlice.reducer;
