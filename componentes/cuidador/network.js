// Importar dependencias
const express = require('express');
const cors = require('cors');

// Importar capa de negocios
const controller = require('./index.js');

// Inicializando router
const router = express.Router();

//Utils
const { corsOptions } = require('../utils/cors.js');

//Rutas de este componente
router.get('/agregarPaciente', cors(corsOptions), addNewCarer);

async function addNewCarer(req, res){
    
}


module.exports = router;