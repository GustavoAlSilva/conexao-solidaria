import Joi from 'joi';

export const createEstoqueAlimentoSchema = Joi.object({
    id_alimento: Joi.number().integer().positive().required(),
    data_validade: Joi.date().required(),
    peso: Joi.number().precision(2).required(),
    id_deposito: Joi.number().integer().positive().required()
});

export const updateEstoqueAlimentoSchema = Joi.object({
    id_alimento: Joi.number().integer().positive().required(),
    data_validade: Joi.date().required(),
    peso: Joi.number().precision(2).required(),
    id_deposito: Joi.number().integer().positive().required()
});
