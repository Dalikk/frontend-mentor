import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchAdvice = createAsyncThunk(
  'advice/fetchAdvice',
  async (_,{rejectWithValue}) =>
  {
    try {
      const response = await fetch("https://api.adviceslip.com/advice")
      if (!response.ok) {
        throw new Error('Server error')
      }

      const data = await response.json()

      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const adviceSlice = createSlice({
  name: 'advice',
  initialState: {
    advice: {
      slip: {
        id: null,
        advice: null,
      }
    },
    status: null,
    error: null,
  },
  extraReducers: {
    [fetchAdvice.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchAdvice.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.advice = action.payload;
    },
    [fetchAdvice.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    }
    }
});

export default adviceSlice.reducer;