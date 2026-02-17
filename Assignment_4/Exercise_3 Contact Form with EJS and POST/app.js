const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  console.log(`Received form from ${name} (${email}): ${message}`);
  
  res.send(`Thank you, ${name}! We received your message.`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});