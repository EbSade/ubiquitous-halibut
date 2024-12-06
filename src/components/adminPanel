import React, { useEffect, useState } from 'react';

const MessagesPanel = () => {
  const [messages, setMessages] = useState([]);
  const [filters, setFilters] = useState({ email: '', startDate: '', endDate: '' });

  const fetchMessages = async () => {
    const query = new URLSearchParams(filters).toString();
    const response = await fetch(`http://localhost:5000/api/messages?${query}`);
    const data = await response.json();
    setMessages(data);
  };

  const deleteMessage = async (id) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      await fetch(`http://localhost:5000/api/messages/${id}`, { method: 'DELETE' });
      fetchMessages();
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [filters]);

  return (
    <div>
      <h1>Messages Panel</h1>
      <div>
        <input
          type="text"
          placeholder="Filter by email"
          value={filters.email}
          onChange={(e) => setFilters({ ...filters, email: e.target.value })}
        />
        <input
          type="date"
          placeholder="Start Date"
          onChange={(e) => setFilters({ ...filters, startDate: e.target.value })}
        />
        <input
          type="date"
          placeholder="End Date"
          onChange={(e) => setFilters({ ...filters, endDate: e.target.value })}
        />
        <button onClick={fetchMessages}>Apply Filters</button>
      </div>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((msg) => (
            <tr key={msg._id}>
              <td>{msg.name}</td>
              <td>{msg.email}</td>
              <td>{msg.message}</td>
              <td>{new Date(msg.createdAt).toLocaleString()}</td>
              <td>
                <button onClick={() => deleteMessage(msg._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MessagesPanel;
