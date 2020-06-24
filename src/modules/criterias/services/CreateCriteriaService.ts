import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Criteria from '../infra/typeorm/entities/Criteria';
import ICriteriasRepository from '../repositories/ICriteriasRepository';

interface IRequest {
  title: string;
  score: number;
  icon: string;
}

@injectable()
class CreateCriteriaService {
  constructor(
    @inject('CriteriasRepository')
    private criteriasRepository: ICriteriasRepository,
  ) {}

  public async execute({ title, icon, score }: IRequest): Promise<Criteria> {
    const checkCriteriaExist = await this.criteriasRepository.findByName(title);

    if (checkCriteriaExist) {
      throw new AppError('Criteria already exists.');
    }

    const criteria = await this.criteriasRepository.create({
      title,
      icon,
      score,
    });

    return criteria;
  }
}

export default CreateCriteriaService;
