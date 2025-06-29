import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './admin.css'

const Admin = () => {
  const [tickets, setTickets] = useState([]);
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [status, setStatus] = useState('');
  const [response, setResponse] = useState('');
  const token = localStorage.getItem('auth-token');

  // Fetch all tickets
  const fetchTickets = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/tickets/admin', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTickets(res.data);
    } catch (err) {
      console.error('Failed to fetch tickets', err);
    }
  };

  // Fetch stats
  const fetchStats = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/tickets/admin/stats', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setStats(res.data);
    } catch (err) {
      console.error('Failed to fetch stats', err);
    }
  };

  useEffect(() => {
    fetchTickets();
    fetchStats();
    setLoading(false);
  }, []);

  const handleUpdate = async (ticketId) => {
    try {
      const res = await axios.put(
        'http://localhost:5000/api/tickets/admin/:ticketId',
        { status, response },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setTickets((prev) =>
        prev.map((t) => (t._id === ticketId ? res.data : t))
      );
      setSelectedTicket(null);
    } catch (err) {
      console.error('Failed to update ticket', err);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      <div className="mb-6 grid grid-cols-2 gap-4">
        <div className="p-4 border rounded shadow">
          <h2 className="font-semibold">Total Tickets</h2>
          <p>{stats.total}</p>
        </div>
        <div className="p-4 border rounded shadow">
          <h2 className="font-semibold">Open / Closed / Escalated</h2>
          <p>{stats.open} / {stats.closed} / {stats.escalated}</p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-2">Tickets</h2>
      {tickets.map((ticket) => (
        <div key={ticket._id} className="border p-4 mb-4 rounded shadow">
          <p><strong>From:</strong> {ticket.email}</p>
          <p><strong>Message:</strong> {ticket.message}</p>
          <p><strong>Status:</strong> {ticket.status}</p>
          <p><strong>Response:</strong> {ticket.response || 'No response yet'}</p>

          {selectedTicket === ticket._id ? (
            <div className="mt-2">
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="border p-1 mr-2"
              >
                <option value="">Select Status</option>
                <option value="open">Open</option>
                <option value="closed">Closed</option>
                <option value="escalated">Escalated</option>
              </select>
              <input
                type="text"
                placeholder="Response"
                className="border p-1 mr-2"
                value={response}
                onChange={(e) => setResponse(e.target.value)}
              />
              <button
                onClick={() => handleUpdate(ticket._id)}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                Update
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                setSelectedTicket(ticket._id);
                setStatus(ticket.status || '');
                setResponse(ticket.response || '');
              }}
              className="mt-2 text-blue-600 underline"
            >
              Edit
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Admin;
