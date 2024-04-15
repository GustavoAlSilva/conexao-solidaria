import Joi from 'joi';

export const createCidadeSchema = Joi.object({
    id: Joi.number().integer().positive().required().label('ID da cidade'),
    uf: Joi.string().length(2).required().label('UF do estado'),
    nome: Joi.string().max(255).required().label('Nome da cidade')
});

export const updateCidadeSchema = Joi.object({
    uf: Joi.string().length(2).required().label('UF do estado'),
    nome: Joi.string().max(255).required().label('Nome da cidade')
});
