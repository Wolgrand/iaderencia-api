import { inject, injectable } from 'tsyringe';

import Criteria from '../infra/typeorm/entities/Criteria';
import ICriteriasRepository from '../repositories/ICriteriasRepository';

interface IRequest {
  title: string;
  score: number;
  icon: string;
}

@injectable()
class UpdateCriteriaService {
  constructor(
    @inject('CriteriasRepository')
    private criteriasRepository: ICriteriasRepository,
  ) {}

  public async execute(id: string): Promise<Criteria> {
    const findCriteria = await this.criteriasRepository.findById(id);

    await this.criteriasRepository.update(findCriteria);

    return findCriteria;
  }
}

export default UpdateCriteriaService;
