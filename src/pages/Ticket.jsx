import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ticket.css';

const Ticket = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ticket, setTicket] = useState(null);
  const [status, setStatus] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('auth-token');
  console.log('Auth token', token)

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        // Fetch single ticket by ID - your API currently doesn't have this, so you can fetch all and filter
        const res = await axios.get('http://localhost:5000/api/tickets/admin', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const found = res.data.find((t) => t._id === id);
        if (found) {
          setTicket(found);
          setStatus(found.status || '');
          setResponse(found.response || '');
        } else {
          alert('Ticket not found');
          navigate('/admin'); // redirect back to admin list
        }
      } catch (err) {
        console.error('Failed to fetch ticket', err);
      } finally {
        setLoading(false);
      }
    };
    fetchTicket();
  }, [id, token, navigate]);

  const handleUpdate = async () => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/tickets/admin/${id}`,
        { status, response },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setTicket(res.data);
      alert('Ticket updated successfully');
    } catch (err) {
      console.error('Failed to update ticket', err);
      alert('Failed to update ticket');
    }
  };

  if (loading) return <div className="ticket-container">Loading ticket...</div>;

  if (!ticket) return <div className="ticket-container">Ticket not found.</div>;

  return (
    <div className="ticket-container">
      <h1>Ticket Details</h1>
      <div className="ticket-box">
        <p><strong>From:</strong> {ticket.email}</p>
        <p><strong>Message:</strong> {ticket.message}</p>
        <p><strong>Submitted:</strong> {new Date(ticket.createdAt).toLocaleString()}</p>

        <div className="edit-area">
          <label>Status:</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="">Select</option>
            <option value="open">Open</option>
            <option value="closed">Closed</option>
            <option value="escalated">Escalated</option>
          </select>

          <label>Manual Response:</label>
          <textarea
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            placeholder="Type your reply here..."
            rows={5}
          />

          <button onClick={handleUpdate}>Update Ticket</button>
        </div>

        <div className="current-status">
          <p><strong>Current Status:</strong> {ticket.status}</p>
          <p><strong>Response:</strong> {ticket.response || 'No response yet.'}</p>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
