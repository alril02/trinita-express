const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { uuidv7 } = require('uuidv7');

// Model DetailTransaksi
const DetailTransaksi = sequelize.define('DetailTransaksi', {
  id: {
    type: DataTypes.STRING(36),
    primaryKey: true,
    allowNull: false,
    defaultValue: () => uuidv7()
  },
  transaksi_id  : {
    type: DataTypes.STRING(36),
    allowNull: false
  },
  nama_item: {
    type: DataTypes.STRING(150),
    allowNull: false
  },
  count: {
    type: DataTypes.INTEGER(5),
    allowNull: false
  },
  satuan: {
    type: DataTypes.DECIMAL(20, 2),
    allowNull: false
  },
  sub_total: {
    type: DataTypes.DECIMAL(20, 2),
    allowNull: false
  }
}, {
  tableName: 'detail_transaksi',
  timestamps: true, // Menambahkan createdAt dan updatedAt
  underscored: true // Menggunakan snake_case untuk nama kolom
});

module.exports = DetailTransaksi;
