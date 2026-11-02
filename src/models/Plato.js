const mongoose = require('mongoose');

const platoSchema = new mongoose.Schema({
  nombre: { type: String, required: true, trim: true },
  descripcion: { type: String, required: true },
  ingredientes: { type: [String], required: true },
  precio: { type: Number, required: true, min: 0 },
  aptoCeliacos: { type: Boolean, default: false },
  aptoVeganos: { type: Boolean, default: false },
  aptoDiabeticos: { type: Boolean, default: false },
  calorias: { type: Number, required: true, min: 0 },
  imagen: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Plato', platoSchema);
