import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { serverUrl } from ".";

const initialState = {
  books: [
    {
      id: 0,
      title: "",
      author: "",
      publisher: "",
      thumbnail: "",
    },
  ],
  isLoading: false,
  error: null,
};

export const _getbooks = createAsyncThunk(
  "books",
  async (payload, thunkAPI) => {
    try {
      // const data = await axios.get(`${serverUrl}/api/home?page=1&size=5`);
      const data = await axios.get(
        "http://13.125.55.110/api/home?page=1&size=10"
      );
      console.log("GET books request");
      console.log(data);

      return thunkAPI.fulfillWithValue(data.data.books);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {}, //clear함수를 여기에 넣어서 clear up
  extraReducers: {
    [_getbooks.pending]: (state) => {
      state.isLoading = true;
    },
    [_getbooks.fulfilled]: (state, action) => {
      console.log("action.payload =", action.payload);

      state.isLoading = false;
      state.books = action.payload;
    },
    [_getbooks.rejected]: (state, action) => {
      state.isLoading = false;
      console.log("errorrrrr");

      state.error = action.payload;
    },
  },
});

export const {} = booksSlice.actions;
export default booksSlice.reducer;
