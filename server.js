const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5300;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from public folder
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/services', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Komplettes Party-Paket',
      price: 299,
      description: 'Deko, Planung, Setup für bis zu 20 Personen'
    },
    {
      id: 2,
      name: 'Deko-Combo',
      price: 99,
      description: 'Ballons, Girlanden, Tischdeko'
    },
    {
      id: 3,
      name: 'Party-Planning',
      price: 149,
      description: 'Professionelle Planung & Koordination'
    }
  ]);
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Contact: ${name} (${email}) - ${message}`);
  res.json({ success: true, message: 'Nachricht erhalten!' });
});

// 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(PORT, () => {
  console.log(`🎉 Birthday Party Service running on http://localhost:${PORT}`);
});
