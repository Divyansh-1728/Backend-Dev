const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const path = require('path');

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/gallery', (req, res) => {
  const imageDir = path.join(__dirname, 'public', 'images');
  
  fs.readdir(imageDir, (err, files) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error reading images');
    }

    const images = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));

    res.render('gallery', { images });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});