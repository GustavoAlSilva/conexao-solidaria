import CondutorRepository from '../repositories/CondutorRepository';
import { CondutorCreateType, CondutorUpdateType } from '../types/condutorTypes';

export default class CondutorService {

    static getAll() {

        return CondutorRepository.getAll();
    }

    static getOne(id: number) {

        return CondutorRepository.getOne(id);
    }

    static create(data: CondutorCreateType) {

        return CondutorRepository.create(data);
    }

    static update(id: number, data: CondutorUpdateType) {

        return CondutorRepository.update(id, data);
    }

    static delete(id: number) {

        return CondutorRepository.delete(id);
    }
}
