const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { uuidv7 } = require('uuidv7');

// Model Kategori
const Kategori = sequelize.define('Kategori', {
  id: {
    type: DataTypes.STRING(36),
    primaryKey: true,
    allowNull: false,
    defaultValue: () => uuidv7()
  },
  kategori: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  deskripsi: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
}, {
  tableName: 'kategori',
  timestamps: true, // Menambahkan createdAt dan updatedAt
  underscored: true // Menggunakan snake_case untuk nama kolom
});

module.exports = Kategori;
