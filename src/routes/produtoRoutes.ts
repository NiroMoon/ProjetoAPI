import { Router } from 'express';
import {
  createProdutoController,
  getProdutosController,
  getProdutoByIdController,
  updateProdutoController,
  deleteProdutoController,
} from '../controllers/produtoController';

const router = Router();

router.post('/', createProdutoController);

router.get('/', getProdutosController);

router.get('/:id', getProdutoByIdController);

router.put('/:id', updateProdutoController);

router.delete('/:id', deleteProdutoController);

export default router;