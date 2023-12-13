import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import songService from "./songService";

const initialState = {
  songs: [],
  song: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get song
export const getSongs = createAsyncThunk(
  "songs/getAll",
  async (_, thunkAPI) => {
    try {
      return await songService.getSongs();
    } catch (error) {
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSongs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSongs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.songs = action.payload;
      })
      .addCase(getSongs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = songSlice.actions;
export default songSlice.reducer;