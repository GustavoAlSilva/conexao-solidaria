import express from 'express';
import ArrecadacaoAlimentoController from '../controllers/ArrecadacaoAlimentoController';
import { validateSchema } from '../middlewares/validateSchema';
import { createArrecadacaoAlimentoSchema, updateArrecadacaoAlimentoSchema } from '../validations/arrecadacaoAlimentoValidation';

const router = express.Router();

router.get('/', ArrecadacaoAlimentoController.getAll);
router.get('/:id', ArrecadacaoAlimentoController.getOne);
router.post('/', validateSchema(createArrecadacaoAlimentoSchema), ArrecadacaoAlimentoController.create);
router.put('/:id', validateSchema(updateArrecadacaoAlimentoSchema), ArrecadacaoAlimentoController.update);
router.delete('/:id', ArrecadacaoAlimentoController.delete);

export default router;
