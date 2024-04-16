export type PessoaCreateType = {
    cpf: string;
    nome: string;
    sobrenome: string;
    data_nascimento: Date;
    id_cidade: number;
    bairro: string;
    cep: string;
    logradouro: string;
    numero_residencial: string;
    ddd: string;
    telefone: string;
    email: string;
};

export type PessoaUpdateType = {
    cpf: string;
    nome: string;
    sobrenome: string;
    data_nascimento: Date;
    id_cidade: number;
    bairro: string;
    cep: string;
    logradouro: string;
    numero_residencial: string;
    ddd: string;
    telefone: string;
    email: string;
};
