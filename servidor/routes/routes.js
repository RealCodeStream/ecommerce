import getProductosController from '../src/controllers/productosController.js';
import express from 'express';
const router = express.Router();

//Rutas del producto get,post, patch etc...
router.get('/productos', getProductosController);

//module.exports = router;
export default router;