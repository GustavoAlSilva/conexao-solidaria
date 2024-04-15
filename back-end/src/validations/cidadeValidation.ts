import Joi from 'joi';

export const createCidadeSchema = Joi.object({
    uf_estado: Joi.string().length(2).required().label('UF do estado'),
    nome: Joi.string().max(255).required().label('Nome da cidade')
});

export const updateCidadeSchema = Joi.object({
    uf_estado: Joi.string().length(2).required().label('UF do estado'),
    nome: Joi.string().max(255).required().label('Nome da cidade')
});
