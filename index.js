const express = require('express');
const sequelize = require('./config/database');
const Transaksi = require('./models/Transaksi');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sinkronisasi database (akan membuat tabel jika belum ada)
sequelize.sync({ alter: true }).then(() => {
  console.log('Database & tabel telah disinkronkan');
});

// Route contoh
app.get('/', (req, res) => {
  res.json({ message: 'Server is running with Sequelize ORM' });
});

// Route test database dengan Sequelize
app.get('/test-db', async (req, res) => {
  try {
    await sequelize.authenticate();
    res.json({ message: 'Koneksi database berhasil!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route untuk mengambil semua transaksi
app.get('/transaksi', async (req, res) => {
  try {
    const transaksi = await Transaksi.findAll();
    res.json({ data: transaksi });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route untuk membuat transaksi baru
app.post('/transaksi', async (req, res) => {
  try {
    const transaksi = await Transaksi.create(req.body);
    res.status(201).json({ message: 'Transaksi berhasil dibuat', data: transaksi });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


