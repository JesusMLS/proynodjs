const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/listar', userController.listar);
router.get('/agregar', userController.agregar);
router.post('/guardar', userController.guardar);
router.post('/eliminar', userController.eliminar);
router.get('/editar/:id', userController.editar);
router.post('/actualizar/:id', userController.actualizar);

module.exports = router;