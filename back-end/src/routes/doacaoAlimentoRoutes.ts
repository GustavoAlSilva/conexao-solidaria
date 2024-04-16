import express from 'express';
import DoacaoAlimentoController from '../controllers/DoacaoAlimentoController';
import { validateSchema } from '../middlewares/validateSchema';
import { createDoacaoAlimentoSchema, updateDoacaoAlimentoSchema } from '../validations/doacaoAlimentoValidation';

const router = express.Router();

router.get('/', DoacaoAlimentoController.getAll);
router.get('/:id', DoacaoAlimentoController.getOne);
router.post('/', validateSchema(createDoacaoAlimentoSchema), DoacaoAlimentoController.create);
router.put('/:id', validateSchema(updateDoacaoAlimentoSchema), DoacaoAlimentoController.update);
router.delete('/:id', DoacaoAlimentoController.delete);

export default router;
