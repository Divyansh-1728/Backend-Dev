const express = require('express');
const app = express();
const port = 3000;

// Dummy data
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'David' }
];

// Route with query parameter filtering
app.get('/users', (req, res) => {
  const { name } = req.query;

  if (name) {
    // Filter users where the name includes the query string (case-insensitive)
    const filteredUsers = users.filter(user => 
      user.name.toLowerCase().includes(name.toLowerCase())
    );
    return res.json(filteredUsers);
  }

  // If no name parameter, return all users
  res.json(users);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});