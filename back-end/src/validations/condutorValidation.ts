import Joi from 'joi';

export const createCondutorSchema = Joi.object({
    id: Joi.number().integer().positive().required(),
    cnh: Joi.string().length(11).required()
});

export const updateCondutorSchema = Joi.object({
    cnh: Joi.string().length(11).required()
});
