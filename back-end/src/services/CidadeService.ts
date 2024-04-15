import CidadeRepository from '../repositories/CidadeRepository';

export default class EstadoService {

    static getAll() {

        return CidadeRepository.getAll();
    }

    static getOne(id: string) {

        return CidadeRepository.getOne(id);
    }

    static create(data: any) {

        return CidadeRepository.create(data);
    }

    static update(id: string, data: any) {

        return CidadeRepository.update(id, data);
    }

    static delete(id: string) {

        return CidadeRepository.delete(id);
    }
}
