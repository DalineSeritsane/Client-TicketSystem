import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitTicket } from '../features/tickets/ticketSlice';
import { CheckCircle, Send, HelpCircle, ClipboardList } from 'lucide-react';

const Dashboard = () => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.tickets);

  const handleSubmit = () => {
    if (!message.trim()) return;
    dispatch(submitTicket(message));
    setMessage('');
  };

  return (
    <>
    <div className="min-h-screen bg-background p-6 text-primary">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold">Welcome to HelpDesk Pro</h1>
          <p className="text-lg text-gray-600">Submit issues and get AI-powered help or escalate to support.</p>
        </div>

        {/* Submit Ticket Form */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <HelpCircle className="w-6 h-6 text-accent" /> Submit a New Ticket
          </h2>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Describe your issue..."
            className="w-full border p-4 rounded-md focus:ring-2 focus:ring-primary mb-4 min-h-[100px]"
          ></textarea>
          <button
            onClick={handleSubmit}
            className="bg-[gray] text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
          >
            <Send className="w-5 h-5" /> Submit Ticket
          </button>
        </div>

        {/* Ticket History */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <ClipboardList className="w-6 h-6 text-secondary" /> Ticket History
          </h2>
          {tickets.length === 0 ? (
            <p className="text-gray-500">No tickets submitted yet.</p>
          ) : (
            <ul className="space-y-4">
              {tickets.map((ticket, index) => (
                <li key={index} className="border p-4 rounded-md bg-gray-50">
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-600">Submitted: {new Date(ticket.createdAt || Date.now()).toLocaleString()}</p>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      ticket.status === 'closed'
                        ? 'bg-green-200 text-green-800'
                        : 'bg-yellow-200 text-yellow-800'
                    }`}>
                      {ticket.status || 'open'}
                    </span>
                  </div>
                  <p className="text-primary font-medium mt-2">{ticket.message}</p>
                  <p className="text-sm text-gray-700 mt-1">💬 {ticket.response || 'Pending response...'}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Success Note */}
        <div className="text-center mt-8">
          <p className="text-sm text-green-600 flex items-center justify-center gap-2">
            <CheckCircle className="w-5 h-5" /> Tickets auto-replied by AI or escalated if needed.
          </p>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default Dashboard;