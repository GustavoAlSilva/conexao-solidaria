import DepositoRepository from '../repositories/DepositoRepository';
import { DepositoCreateType, DepositoUpdateType } from '../types/depositoTypes';

export default class DepositoService {

    static getAll() {

        return DepositoRepository.getAll();
    }

    static getOne(id: number) {

        return DepositoRepository.getOne(id);
    }

    static create(data: DepositoCreateType) {

        return DepositoRepository.create(data);
    }

    static update(id: number, data: DepositoUpdateType) {

        return DepositoRepository.update(id, data);
    }

    static delete(id: number) {

        return DepositoRepository.delete(id);
    }
}
