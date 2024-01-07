import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import songService from "./songService";

const initialState = {
  songs: [],
  // song: {},
  isError: false,
  isSuccess: false,
  message:
    "Songs might take a minute to appear - don't scroll away or refresh!",
};

// Get songs
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
  name: "songs",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSongs.pending, (state, action) => {
        state.message = action.payload;
      })
      .addCase(getSongs.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.songs = action.payload;
      })
      .addCase(getSongs.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = songSlice.actions;
export default songSlice.reducer;
