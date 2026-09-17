require('dotenv').config();

const express = require('express');
const app = express();

const PORT = process.env.PORT || 4003;

app.get('/', (req, res) => {
  res.send('Hola, soy el API de servicio');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
