import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import songService from "./songService";

const initialState = {
  songs: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message:
    "Songs might take a minute to appear - don't scroll away or refresh!",
};

// Get songs
export const getSongs = createAsyncThunk(
  "songs/getAll",
  async (_, thunkAPI) => {
    try {
      const songs = thunkAPI.getState().songs.songs;
      if (songs.length === 0) {
        const result = await songService.getSongs();
        return result;
      } else {
        return songs;
      }
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
  name: "songs",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSongs.pending, (state, action) => {
        state.isLoading = true;
        state.message = action.payload;
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
