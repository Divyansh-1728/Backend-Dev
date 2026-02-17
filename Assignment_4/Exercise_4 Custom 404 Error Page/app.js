const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', { title: 'Home Page' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About Us' });
});

app.use((req, res, next) => {
  res.status(404).render('404', { url: req.originalUrl });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});