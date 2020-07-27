import { inject, injectable } from 'tsyringe';

import Criteria from '../infra/typeorm/entities/Criteria';
import ICriteriasRepository from '../repositories/ICriteriasRepository';

interface IRequest {
  title: string;
  score: number;
  icon: string;
}

interface ICriteria {
  id: string;
  title: string;
  score: number;
  icon: string;
}

@injectable()
class ListCriteriaService {
  constructor(
    @inject('CriteriasRepository')
    private criteriasRepository: ICriteriasRepository,
  ) {}

  public async execute(): Promise<Criteria[]> {
    const findAllCriterias = await this.criteriasRepository.findAll();

    return findAllCriterias;
  }
}

export default ListCriteriaService;
