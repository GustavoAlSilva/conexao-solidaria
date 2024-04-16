import Joi from 'joi';

export const createSolicitanteSchema = Joi.object({
    id: Joi.number().integer().positive().required(),
    quantidade_dependentes: Joi.number().integer().positive().required()
});

export const updateSolicitanteSchema = Joi.object({
    quantidade_dependentes: Joi.number().integer().positive().required()
});
