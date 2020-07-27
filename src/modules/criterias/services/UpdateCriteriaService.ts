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
  }: ICriteria): Promise<Criteria> {
    const findCriteria = await this.criteriasRepository.findById(id);

    findCriteria.title = title;
    findCriteria.score = score;
    findCriteria.icon = icon;

    await this.criteriasRepository.update(findCriteria);

    return findCriteria;
  }
}

export default UpdateCriteriaService;
