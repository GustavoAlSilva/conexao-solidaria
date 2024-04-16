import express from 'express';
import SolicitanteController from '../controllers/SolicitanteController';
import { validateSchema } from '../middlewares/validateSchema';
import { createSolicitanteSchema, updateSolicitanteSchema } from '../validations/solicitanteValidation';

const router = express.Router();

router.get('/', SolicitanteController.getAll);
router.get('/:id', SolicitanteController.getOne);
router.post('/', validateSchema(createSolicitanteSchema), SolicitanteController.create);
router.put('/:id', validateSchema(updateSolicitanteSchema), SolicitanteController.update);
router.delete('/:id', SolicitanteController.delete);

export default router;
