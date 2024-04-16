import Joi from 'joi';

export const createAlimentoSchema = Joi.object({
    nome: Joi.string().max(100).required(),
    descricao: Joi.string().required()
});

export const updateAlimentoSchema = Joi.object({
    nome: Joi.string().max(100).required(),
    descricao: Joi.string().required()
});
