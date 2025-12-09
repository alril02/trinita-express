const { Sequelize } = require('sequelize');

// Konfigurasi koneksi database menggunakan Sequelize
const sequelize = new Sequelize('trinita', 'alril', '22064113', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, // Set ke true jika ingin melihat query SQL
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

// Test koneksi
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Koneksi ke database MySQL berhasil.');
  } catch (error) {
    console.error('Tidak dapat terhubung ke database:', error);
  }
};

testConnection();

module.exports = sequelize;
