import Joi from 'joi';

export const createDoacaoAlimentoSchema = Joi.object({
    id_solicitante: Joi.number().integer().positive().required(),
    id_alimento: Joi.number().integer().positive().required(),
    peso: Joi.number().precision(2).required(),
    id_condutor: Joi.number().integer().positive().required(),
    id_estoque_alimento: Joi.number().integer().positive().required()
});

export const updateDoacaoAlimentoSchema = Joi.object({
    id_solicitante: Joi.number().integer().positive().required(),
    id_alimento: Joi.number().integer().positive().required(),
    peso: Joi.number().precision(2).required(),
    id_condutor: Joi.number().integer().positive().required(),
    id_estoque_alimento: Joi.number().integer().positive().required()
});
