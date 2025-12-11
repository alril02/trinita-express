const express = require('express');
const sequelize = require('./config/database');
const transaksiController = require('./controllers/transaksiController');

const router = express.Router();

// Route contoh
router.get('/', (req, res) => {
  res.json({ message: 'Server is running with Sequelize ORM' });
});

// Route test database dengan Sequelize
router.get('/test-db', async (req, res) => {
  try {
    await sequelize.authenticate();
    res.json({ message: 'Koneksi database berhasil!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route untuk transaksi
router.get('/transaksi', transaksiController.getAllTransaksi);
router.get('/transaksi/:id', transaksiController.getTransaksiById);
router.post('/transaksi', transaksiController.createTransaksi);
router.put('/transaksi/:id', transaksiController.updateTransaksi);
router.delete('/transaksi/:id', transaksiController.deleteTransaksi);

module.exports = router;
