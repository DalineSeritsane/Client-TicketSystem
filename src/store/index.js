import { configureStore } from '@reduxjs/toolkit';
import ticketReducer from '../features/tickets/ticketSlice';






export default configureStore({ reducer: { tickets: ticketReducer } });
