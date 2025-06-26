
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//Async thunk to submit ticket to backend 
export const submitTicket = createAsyncThunk('tickets/submit', async (message, {rejectWithValue}) => {
  try{
  const res = await axios.post('http://localhost:5000/api/tickets', { message }, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}`,
  'Content-Type': 'application/json',
  }
  });
  return res.data;
} catch (error) {
  return rejectWithValue(error.response?.data?.message || error.message);
}
}
);

//Ticket slice with loading and error handling 
const ticketSlice = createSlice({
  name: 'tickets',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(submitTicket.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(submitTicket.fulfilled, (state, action) =>{
      state.items.unshift(action.payload); //Adds newest ticket on top
      state.loading = false;

    })
    .addCase(submitTicket.rejected, (state, action) =>{
      state.loading = false;
      state.error = action.payload || 'Failed to submit ticket';
    })
  },
});
export default ticketSlice.reducer;