import Joi from 'joi';

export const createEstadoSchema = Joi.object({
    uf: Joi.string().length(2).required().label('UF do estado'),
    nome: Joi.string().max(255).required().label('Nome do estado')
});

export const updateEstadoSchema = Joi.object({
    nome: Joi.string().max(255).required().label('Nome do estado')
});
