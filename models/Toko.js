const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { uuidv7 } = require('uuidv7');

// Model Toko
const Toko = sequelize.define('Toko', {
  id: {
    type: DataTypes.STRING(36),
    primaryKey: true,
    allowNull: false,
    defaultValue: () => uuidv7()
  },
  nama_toko: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  alamat: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
}, {
  tableName: 'toko',
  timestamps: true, // Menambahkan createdAt dan updatedAt
  underscored: true // Menggunakan snake_case untuk nama kolom
});

module.exports = Toko;
