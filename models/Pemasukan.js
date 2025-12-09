const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { uuidv7 } = require('uuidv7');

// Model Pemasukan
const Pemasukan = sequelize.define('Pemasukan', {
  id: {
    type: DataTypes.STRING(36),
    primaryKey: true,
    allowNull: false,
    defaultValue: () => uuidv7()
  },
  nim: {
    type: DataTypes.STRING(12),
    allowNull: false
  },
  sumber_dana: {
    type: DataTypes.STRING(36),
    allowNull: false
  },
  nominal: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
}, {
  tableName: 'pemasukan',
  timestamps: true, // Menambahkan createdAt dan updatedAt
  underscored: true // Menggunakan snake_case untuk nama kolom
});

module.exports = Pemasukan;
