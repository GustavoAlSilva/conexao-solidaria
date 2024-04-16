import Joi from 'joi';

export const createDepositoSchema = Joi.object({
    nome: Joi.string().max(100).required(),
    id_pessoa: Joi.number().integer().positive().required()
});

export const updateDepositoSchema = Joi.object({
    nome: Joi.string().max(100).required(),
    id_pessoa: Joi.number().integer().positive().required()
});
