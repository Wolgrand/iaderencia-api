import { inject, injectable } from 'tsyringe';

import Criteria from '../infra/typeorm/entities/Criteria';
import ICriteriasRepository from '../repositories/ICriteriasRepository';

interface ICriteria {
  id: string;
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

  public async execute({
    id,
    title,
    score,
    icon,
  }: ICriteria): Promise<ICriteria> {
    const updatedCriteria = { id, title, score, icon };

    await this.criteriasRepository.update(updatedCriteria);

    return updatedCriteria;
  }
}

export default UpdateCriteriaService;
