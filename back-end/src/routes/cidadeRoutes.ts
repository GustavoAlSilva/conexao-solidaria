import express from 'express';
import CidadeController from '../controllers/CidadeController';
import { validateSchema } from '../middlewares/validateSchema';
import { createCidadeSchema, updateCidadeSchema } from '../validations/cidadeValidation';

const router = express.Router();

router.get('/', CidadeController.getAll);
router.get('/:id', CidadeController.getOne);
router.post('/', validateSchema(createCidadeSchema), CidadeController.create);
router.put('/:id', validateSchema(updateCidadeSchema), CidadeController.update);
router.delete('/:id', CidadeController.delete);

export default router;
