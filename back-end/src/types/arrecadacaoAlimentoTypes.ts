export type ArrecadacaoAlimentoCreateType = {
    id_alimento: number;
    data_validade: Date;
    peso: number;
    id_pessoa: number;
    id_condutor: number;
    id_deposito: number;
};

export type ArrecadacaoAlimentoUpdateType = {
    id_alimento: number;
    data_validade: Date;
    peso: number;
    id_pessoa: number;
    id_condutor: number;
    id_deposito: number;
};
