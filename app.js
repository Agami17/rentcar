require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// EJS setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Routes
const mainRoutes = require('./routes/main');
app.use('/', mainRoutes);

// Tambahan route untuk halaman lain
app.get('/armada', (req, res) => {
  res.render('armada'); // views/armada.ejs
});
app.get('/pemesanan', (req, res) => {
  res.render('pemesanan'); // views/pemesanan.ejs (buat nanti)
});
app.get('/kontak', (req, res) => {
  res.render('kontak'); // views/kontak.ejs (buat nanti)
});

// Start server
app.listen(port, () => {
  console.log(`🚗 Firdaus Rent Car jalan di http://localhost:${port}`);
});
