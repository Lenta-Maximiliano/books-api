const express = require('express');
const router = express.Router();
const pool = require('../db/config');

router.get('/', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM books ORDER BY year'
    );

    res.json(result.rows);
  } catch (error) {
    console.error('Error obteniendo libros:', error);
    res.status(500).json({
      error: 'Error al obtener libros'
    });
  }
});

module.exports = router;