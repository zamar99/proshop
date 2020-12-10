import express from 'express';
const router = express.Router();
import { getProucts, getProductById } from '../controllers/productController.js';

router.route('/').get(getProucts);
router.route('/:id').get(getProductById);

export default router;
