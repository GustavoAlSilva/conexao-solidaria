import express from 'express';
import EstadoController from '../controllers/EstadoController';
import { validateSchema } from '../middlewares/validateSchema';
import { createEstadoSchema, updateEstadoSchema } from '../validations/estadoValidation';

const router = express.Router();

router.get('/', EstadoController.getAll);
router.get('/:uf', EstadoController.getOne);
router.post('/', validateSchema(createEstadoSchema), EstadoController.create);
router.put('/:uf', validateSchema(updateEstadoSchema), EstadoController.update);
router.delete('/:uf', EstadoController.delete);

export default router;
