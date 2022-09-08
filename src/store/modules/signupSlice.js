import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { serverUrl } from ".";

const initialState = {
  member: [
    {
      username: "",
      password: "",
    },
  ],
  isLoading: false,
  error: null,
};

export const _addSignup = createAsyncThunk(
  "ADD_SIGN_UP",
  async (arg, thunkAPI) => {
    try {
      const data = await axios.post(
        `http://13.125.55.110/api/member/signup`,
        arg
      );
      console.log("포스트!");
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {},
  extraReducers: {
    [_addSignup.pending]: (state) => {
      state.isLoading = true;
    },
    [_addSignup.fulfilled]: (state, action) => {
      state.isLoading = false;
      // state.data.push(action.payload);
      state.data = action.payload;
    },
    [_addSignup.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = signupSlice.actions;
export default signupSlice.reducer;
