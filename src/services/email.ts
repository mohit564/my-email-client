import { createAsyncThunk } from "@reduxjs/toolkit";

// constants
import { API_URL } from "../constants";

// types
import { Email, EmailListResponse, EmailFilters } from "../models/email";

export const fetchEmails = createAsyncThunk<EmailListResponse, EmailFilters>(
  "email/fetchEmails",
  async (_, thunkAPI) => {
    const response = await fetch(API_URL);
    const data = (await response.json()) as EmailListResponse;

    if (response.status < 200 || response.status >= 300) {
      return thunkAPI.rejectWithValue(data);
    }

    return data;
  }
);

export const fetchEmailsByPage = createAsyncThunk<
  EmailListResponse,
  EmailFilters
>("email/fetchEmailsByPage", async ({ page = 1 }, thunkAPI) => {
  const response = await fetch(`${API_URL}?page=${page}`);
  const data = (await response.json()) as EmailListResponse;

  if (response.status < 200 || response.status >= 300) {
    return thunkAPI.rejectWithValue(data);
  }

  return data;
});

export const fetchEmailBodyById = createAsyncThunk<Email, EmailFilters>(
  "email/fetchEmailBodyById",
  async ({ id }, thunkAPI) => {
    const response = await fetch(`${API_URL}?id=${id}`);
    const data = (await response.json()) as Email;

    if (response.status < 200 || response.status >= 300) {
      return thunkAPI.rejectWithValue(data);
    }

    return data;
  }
);
