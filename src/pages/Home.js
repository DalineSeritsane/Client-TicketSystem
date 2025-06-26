import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitTicket } from '../features/tickets/ticketSlice';
export default function Home() {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  return (
    <div className='min-h-screen bg-background p-6'>
      <div className='max-w-md mx-auto bg-white p-6 rounded-2xl shadow-xl'>
        <h1 className='text-xl font-bold text-primary mb-4'>HelpDesk Pro</h1>
        <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder='Describe your issue...'
          className='w-full p-2 border rounded-md mb-4'></textarea>
        <button className='bg-primary text-white py-2 px-4 rounded hover:bg-blue-700' onClick={() => dispatch(submitTicket(message))}>
          Submit Ticket
        </button>
      </div>
    </div>
  );
}
