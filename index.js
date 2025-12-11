const express = require('express');
const sequelize = require('./config/database');
const router = require('./router');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sinkronisasi database (akan membuat tabel jika belum ada)
sequelize.sync({ alter: true }).then(() => {
  console.log('Database & tabel telah disinkronkan');
});

// Router utama
app.use(router);

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


