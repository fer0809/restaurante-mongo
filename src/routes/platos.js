const express = require('express');
const router = express.Router();
const Plato = require('../models/Plato');

// Crear plato
router.post('/', async (req, res) => {
  try {
    const plato = await Plato.create(req.body);
    res.status(201).json(plato);
  } catch (e) { res.status(400).json({ error: e.message }); }
});

// Listar todos
router.get('/', async (req, res) => {
  const platos = await Plato.find();
  res.json(platos);
});

// Obtener uno
router.get('/:id', async (req, res) => {
  try {
    const plato = await Plato.findById(req.params.id);
    if (!plato) return res.status(404).json({ error: 'No encontrado' });
    res.json(plato);
  } catch (e) { res.status(400).json({ error: e.message }); }
});

// Modificar
router.put('/:id', async (req, res) => {
  try {
    const plato = await Plato.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!plato) return res.status(404).json({ error: 'No encontrado' });
    res.json(plato);
  } catch (e) { res.status(400).json({ error: e.message }); }
});

// Baja (eliminar)
router.delete('/:id', async (req, res) => {
  try {
    const plato = await Plato.findByIdAndDelete(req.params.id);
    if (!plato) return res.status(404).json({ error: 'No encontrado' });
    res.json({ message: 'Eliminado', id: plato._id });
  } catch (e) { res.status(400).json({ error: e.message }); }
});

module.exports = router;
