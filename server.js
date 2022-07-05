require('dotenv').config();
const app = require('./src/app');
const mongoose = require("mongoose");

try {
  mongoose.connect(process.env.DB_URI, () => {
    console.log('Banco de dados inicializado!');

    app.listen(3000, () => {
      console.log('Servidor inicializado!');
    });
  });
} catch (error) {
  console.error('Erro ao conectar com o banco de dados.');
  process.exit(1);
}
