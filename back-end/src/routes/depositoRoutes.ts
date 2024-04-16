import express from 'express';
import DepositoController from '../controllers/DepositoController';
import { validateSchema } from '../middlewares/validateSchema';
import { createDepositoSchema, updateDepositoSchema } from '../validations/depositoValidation';

const router = express.Router();

router.get('/', DepositoController.getAll);
router.get('/:id', DepositoController.getOne);
router.post('/', validateSchema(createDepositoSchema), DepositoController.create);
router.put('/:id', validateSchema(updateDepositoSchema), DepositoController.update);
router.delete('/:id', DepositoController.delete);

export default router;
