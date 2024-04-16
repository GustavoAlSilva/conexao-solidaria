import express from 'express';
import PessoaController from '../controllers/PessoaController';
import { validateSchema } from '../middlewares/validateSchema';
import { createPessoaSchema, updatePessoaSchema } from '../validations/pessoaValidation';

const router = express.Router();

router.get('/', PessoaController.getAll);
router.get('/:id', PessoaController.getOne);
router.post('/', validateSchema(createPessoaSchema), PessoaController.create);
router.put('/:id', validateSchema(updatePessoaSchema), PessoaController.update);
router.delete('/:id', PessoaController.delete);

export default router;
