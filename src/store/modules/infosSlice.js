import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  infos: [
    {
      title: "",
      author: "",
      thumbnail: "",
      publisher: "",
    },
  ],
  isLoading: false,
  error: null,
};

export const _getinfos = createAsyncThunk(
  "infos",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(
        `http://13.125.55.110/api/books/search?query=${payload}`
      );
      // const data = await axios.get("http://localhost:3001/books");

      console.log("GET infos request");

      console.log("payload =", payload);

      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const _postinfos = createAsyncThunk(
  "infos",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post("http://localhost:3001/books");
      // `http://13.125.55.110/api/books/search?query=${payload}`
      // `http://13.125.55.110/api/books/search?query=`
      console.log("Post infos request");
      console.log("payload =", payload);

      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const infosSlice = createSlice({
  name: "infos",
  initialState,
  reducers: {}, //clear함수를 여기에 넣어서 clear up
  extraReducers: {
    [_getinfos.pending]: (state) => {
      state.isLoading = true;
    },
    [_getinfos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.infos = action.payload;
      console.log("getinfos fulfilled =", action.payload);
    },
    [_getinfos.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [_postinfos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.infos = action.payload;
      console.log("postinfos fulfilled =", action.payload);
    },
  },
});

export const {} = infosSlice.actions;
export default infosSlice.reducer;
