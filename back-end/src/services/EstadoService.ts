import EstadoRepository from '../repositories/EstadoRepository';

export default class EstadoService {

    static getAll() {

        return EstadoRepository.getAll();
    }

    static getOne(uf: string) {

        return EstadoRepository.getOne(uf);
    }

    static create(data: any) {

        return EstadoRepository.create(data);
    }

    static update(uf: string, data: any) {

        return EstadoRepository.update(uf, data);
    }

    static delete(uf: string) {

        return EstadoRepository.delete(uf);
    }
}
