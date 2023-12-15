import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import emailService from "./emailService";

const initialState = {
  email: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get song
export const sendEmail = createAsyncThunk(
  "email/create",
  async ({ songData, firstName }, thunkAPI) => {
    try {
      return await emailService.sendEmail(songData, firstName);
    } catch (error) {
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendEmail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendEmail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.email = action.payload;
      })
      .addCase(sendEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = emailSlice.actions;
export default emailSlice.reducer;
