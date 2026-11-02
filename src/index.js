require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const platosRouter = require('./routes/platos');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/api/platos', platosRouter);

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/restaurante';

mongoose.connect(MONGO_URI)
  .then(() => app.listen(PORT, () => console.log(`Server on ${PORT}`)))
  .catch(err => { console.error(err); process.exit(1); });
