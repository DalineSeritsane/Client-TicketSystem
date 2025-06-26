import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitTicket } from '../features/tickets/ticketSlice';
import { CheckCircle, Send, HelpCircle, ClipboardList } from 'lucide-react';
import './dashboard.css'

const Dashboard = () => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const { items: tickets, loading, error} = useSelector((state) => state.tickets);

  const handleSubmit = () => {
    if (!message.trim()) return;
    dispatch(submitTicket(message));
    setMessage('');
  };

  return (
    <>
    <div className="dashboard">
      <div className="container">

        <header className="dashboard-header">
          <h1>Welcome to HelpDesk Pro</h1>
          <p >Submit issues and get AI-powered help or escalate to support.</p>
        </header>

       
        <section className="ticket-form">
          <h2>
            <HelpCircle size={20} /> Submit a New Ticket
          </h2>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Describe your issue..."
            />
          
          <button
            onClick={handleSubmit}>
            <Send size={16} /> Submit Ticket
          </button>
        </section>

        
        <section className="ticket-history">
          <h2 >
            <ClipboardList size={20}/> Ticket History
          </h2>
          {tickets.length === 0 ? (
            <p className="no-tickets">No tickets submitted yet.</p>
          ) : (
            <ul >
              {tickets.map((ticket, index) => (
                <li key={index} >
                  <div className="ticket-meta">
                    <span>Submitted: {new Date(ticket.createdAt || Date.now()).toLocaleString()}</span>
                    <span className={`status ${ticket.status === 'closed' ? 'closed' : 'open'}`}>
                      {ticket.status || 'open'}
                    </span>
                  </div>
                  <p className="ticket-message">{ticket.message}</p>
                  <p className="ticket-response">💬 {ticket.response || 'Pending response...'}</p>
                </li>
              ))}
            </ul>
          )}
        </section>

     
        <footer className="dashboard-footer">
          <p >
            <CheckCircle size={16} /> Tickets auto-replied by AI or escalated if needed.
          </p>
        </footer>
      </div>
    </div>
    
    </>
  );
};

export default Dashboard;