import { Router } from 'express';
import ProductController from '../controllers/products.controller';
import validateProduct from '../middlewares/product.middleware';

const router = Router();

const productsController = new ProductController();

router.get('/products', productsController.getAll);
router.post(
  '/products', 
  validateProduct.validateName,
  validateProduct.validateAmount,
  productsController.create,
);

export default router;