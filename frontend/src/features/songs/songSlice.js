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
