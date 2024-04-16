import Joi from 'joi';

export const createPessoaSchema = Joi.object({
    cpf: Joi.string().length(11).required(),
    nome: Joi.string().max(100).required(),
    sobrenome: Joi.string().max(100).required(),
    data_nascimento: Joi.date().required(),
    id_cidade: Joi.number().integer().positive().required(),
    bairro: Joi.string().max(100).required(),
    cep: Joi.string().length(8).required(),
    logradouro: Joi.string().max(100).required(),
    numero_residencial: Joi.string().max(10).allow('', null),
    ddd: Joi.string().length(2).required(),
    telefone: Joi.string().length(9).required(),
    email: Joi.string().email().max(100).required()
});

export const updatePessoaSchema = Joi.object({
    cpf: Joi.string().length(11).required(),
    nome: Joi.string().max(100).required(),
    sobrenome: Joi.string().max(100).required(),
    data_nascimento: Joi.date().required(),
    id_cidade: Joi.number().integer().positive().required(),
    bairro: Joi.string().max(100).required(),
    cep: Joi.string().length(8).required(),
    logradouro: Joi.string().max(100).required(),
    numero_residencial: Joi.string().max(10).allow('', null),
    ddd: Joi.string().length(2).required(),
    telefone: Joi.string().length(9).required(),
    email: Joi.string().email().max(100).required()
});
