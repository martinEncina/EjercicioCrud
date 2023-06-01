const express = require('express');
const {getComidasPepe, getComidas,postComidas, putComidas,deleteComidas} = require('../controllers/comida.controller');

const comidasRouter = express.Router();

comidasRouter.get('/pepe', getComidasPepe)

comidasRouter.get('/', getComidas)

comidasRouter.post('/', postComidas);

  comidasRouter.put('/', putComidas);

  comidasRouter.delete('/', deleteComidas);
  
module.exports = comidasRouter;