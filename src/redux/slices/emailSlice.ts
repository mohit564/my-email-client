import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// types
import type { Email, EmailState } from "../../models/email";
import type { EmailFilterTypes } from "../../models/filter";

// services
import { fetchEmailsByPage, fetchEmailBodyById } from "../../services/email";

// utils
import { convertArrayToEmailList } from "../../utils/email";

const initialState = {
  loading: false,
  error: null,
  emails: {},
  total: 0,
  openedEmail: null,
  filteredEmails: {},
} as EmailState;

export const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    handleFavoriteButtonClick: (state, action: PayloadAction<string>) => {
      const id = action.payload;

      if (state.filteredEmails.hasOwnProperty(id)) {
        state.filteredEmails[id].isFavorite =
          !state.filteredEmails[id].isFavorite;
        state.emails[id] = state.filteredEmails[id];
        state.openedEmail = state.filteredEmails[id];
      }
    },

    getEmailsByFilter: (state, action: PayloadAction<EmailFilterTypes>) => {
      const filter = action.payload;

      let filteredEmails = [] as Email[];

      switch (filter) {
        case "ALL":
          filteredEmails = Object.values(state.emails);
          break;
        case "UNREAD":
          filteredEmails = Object.values(state.emails).filter(
            (email) => !email.hasRead
          );
          break;
        case "READ":
          filteredEmails = Object.values(state.emails).filter(
            (email) => email.hasRead
          );
          break;
        case "FAVORITE":
          filteredEmails = Object.values(state.emails).filter(
            (email) => email.isFavorite
          );
          break;
        default:
          filteredEmails = Object.values(state.emails);
      }

      state.filteredEmails = convertArrayToEmailList(filteredEmails);
      state.openedEmail = null;
    },

    openEmailFromList: (state, action: PayloadAction<string>) => {
      const id = action.payload;

      if (state.filteredEmails.hasOwnProperty(id)) {
        state.openedEmail = state.filteredEmails[id];
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEmailsByPage.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(fetchEmailsByPage.fulfilled, (state, action) => {
      const newEmails = convertArrayToEmailList(action.payload.list);

      if (state.total > 0) {
        state.emails = { ...state.emails, ...newEmails };
      } else {
        state.emails = newEmails;
      }

      state.filteredEmails = state.emails;
      state.total = action.payload.total ?? 0;

      state.loading = false;
      state.error = null;
    });

    builder.addCase(fetchEmailsByPage.rejected, (state, action) => {
      console.log("Error", action.payload);

      state.loading = false;
      state.error = new Error("Something went wrong, please try again");
    });

    builder.addCase(fetchEmailBodyById.pending, (state, action) => {
      const { id = "" } = action.meta.arg;

      if (state.filteredEmails.hasOwnProperty(id)) {
        state.filteredEmails[id].hasRead = true;
        state.emails[id] = state.filteredEmails[id];
        state.openedEmail = state.filteredEmails[id];
      }
    });

    builder.addCase(fetchEmailBodyById.fulfilled, (state, action) => {
      const { id = "", body = "" } = action.payload;

      if (state.filteredEmails.hasOwnProperty(id)) {
        state.filteredEmails[id].body = body;
        state.emails[id] = state.filteredEmails[id];
        state.openedEmail = state.filteredEmails[id];
      }
    });

    builder.addCase(fetchEmailBodyById.rejected, (state, action) => {
      console.log("Error", action.payload);

      state.openedEmail = null;
      state.error = new Error("Something went wrong, please try again");
    });
  },
});

export const {
  handleFavoriteButtonClick,
  getEmailsByFilter,
  openEmailFromList,
} = emailSlice.actions;

export default emailSlice.reducer;
