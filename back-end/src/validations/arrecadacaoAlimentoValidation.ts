import Joi from 'joi';

export const createArrecadacaoAlimentoSchema = Joi.object({
    id_alimento: Joi.number().integer().positive().required(),
    data_validade: Joi.date().required(),
    peso: Joi.number().precision(2).required(),
    id_pessoa: Joi.number().integer().positive().required(),
    id_condutor: Joi.number().integer().positive().required(),
    id_deposito: Joi.number().integer().positive().required()
});

export const updateArrecadacaoAlimentoSchema = Joi.object({
    id_alimento: Joi.number().integer().positive().required(),
    data_validade: Joi.date().required(),
    peso: Joi.number().precision(2).required(),
    id_pessoa: Joi.number().integer().positive().required(),
    id_condutor: Joi.number().integer().positive().required(),
    id_deposito: Joi.number().integer().positive().required()
});
