import express from 'express';
import EstoqueAlimentoController from '../controllers/EstoqueAlimentoController';
import { validateSchema } from '../middlewares/validateSchema';
import { createEstoqueAlimentoSchema, updateEstoqueAlimentoSchema } from '../validations/estoqueAlimentoValidation';

const router = express.Router();

router.get('/', EstoqueAlimentoController.getAll);
router.get('/:id', EstoqueAlimentoController.getOne);
router.post('/', validateSchema(createEstoqueAlimentoSchema), EstoqueAlimentoController.create);
router.put('/:id', validateSchema(updateEstoqueAlimentoSchema), EstoqueAlimentoController.update);
router.delete('/:id', EstoqueAlimentoController.delete);

export default router;
