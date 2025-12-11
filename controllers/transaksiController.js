const Transaksi = require('../models/Transaksi');

const getAllTransaksi = async (req, res) => {
  try {
    const transaksi = await Transaksi.findAll();
    res.json({ data: transaksi });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTransaksiById = async (req, res) => {
  try {
    const transaksi = await Transaksi.findByPk(req.params.id);

    if (!transaksi) {
      return res.status(404).json({ error: 'Transaksi tidak ditemukan' });
    }

    res.json({ data: transaksi });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createTransaksi = async (req, res) => {
  try {
    const transaksi = await Transaksi.create(req.body);
    res.status(201).json({ message: 'Transaksi berhasil dibuat', data: transaksi });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateTransaksi = async (req, res) => {
  try {
    const transaksi = await Transaksi.findByPk(req.params.id);

    if (!transaksi) {
      return res.status(404).json({ error: 'Transaksi tidak ditemukan' });
    }

    await transaksi.update(req.body);
    res.json({ message: 'Transaksi berhasil diperbarui', data: transaksi });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteTransaksi = async (req, res) => {
  try {
    const transaksi = await Transaksi.findByPk(req.params.id);

    if (!transaksi) {
      return res.status(404).json({ error: 'Transaksi tidak ditemukan' });
    }

    await transaksi.destroy();
    res.json({ message: 'Transaksi berhasil dihapus' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllTransaksi,
  getTransaksiById,
  createTransaksi,
  updateTransaksi,
  deleteTransaksi
};
