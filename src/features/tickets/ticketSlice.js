import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const submitTicket = createAsyncThunk('tickets/submit', async (message) => {
  const res = await axios.post('http://localhost:5000/api/tickets', { message }, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  });
  return res.data;
});
const ticketSlice = createSlice({
  name: 'tickets',
  initialState: [],
  extraReducers: builder => {
    builder.addCase(submitTicket.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});
export default ticketSlice.reducer;
