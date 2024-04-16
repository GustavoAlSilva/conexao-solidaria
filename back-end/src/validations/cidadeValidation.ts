import Joi from 'joi';

export const createCidadeSchema = Joi.object({
    nome: Joi.string().max(255).required().label('Nome da cidade'),
    uf_estado: Joi.string().length(2).required().label('UF do estado')
});

export const updateCidadeSchema = Joi.object({
    nome: Joi.string().max(255).required().label('Nome da cidade'),
    uf_estado: Joi.string().length(2).required().label('UF do estado')
});
