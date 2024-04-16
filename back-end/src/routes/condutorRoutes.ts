import express from 'express';
import CondutorController from '../controllers/CondutorController';
import { validateSchema } from '../middlewares/validateSchema';
import { createCondutorSchema, updateCondutorSchema } from '../validations/condutorValidation';

const router = express.Router();

router.get('/', CondutorController.getAll);
router.get('/:id', CondutorController.getOne);
router.post('/', validateSchema(createCondutorSchema), CondutorController.create);
router.put('/:id', validateSchema(updateCondutorSchema), CondutorController.update);
router.delete('/:id', CondutorController.delete);

export default router;
