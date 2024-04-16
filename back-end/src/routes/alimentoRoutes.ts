import express from 'express';
import AlimentoController from '../controllers/AlimentoController';
import { validateSchema } from '../middlewares/validateSchema';
import { createAlimentoSchema, updateAlimentoSchema } from '../validations/alimentoValidation';

const router = express.Router();

router.get('/', AlimentoController.getAll);
router.get('/:id', AlimentoController.getOne);
router.post('/', validateSchema(createAlimentoSchema), AlimentoController.create);
router.put('/:id', validateSchema(updateAlimentoSchema), AlimentoController.update);
router.delete('/:id', AlimentoController.delete);

export default router;
