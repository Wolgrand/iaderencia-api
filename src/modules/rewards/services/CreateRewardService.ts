import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Reward from '../infra/typeorm/entities/Reward';
import IRewardsRepository from '../repositories/IRewardsRepository';

interface IRequest {
  title: string;
  score: number;
  icon: string;
  description: string;
}

@injectable()
class CreateRewardService {
  constructor(
    @inject('RewardsRepository')
    private rewardsRepository: IRewardsRepository,
  ) {}

  public async execute({
    title,
    icon,
    score,
    description,
  }: IRequest): Promise<Reward> {
    const checkRewardExist = await this.rewardsRepository.findByName(title);

    if (checkRewardExist) {
      throw new AppError('Criteria already exists.');
    }

    const reward = await this.rewardsRepository.create({
      title,
      icon,
      score,
      description,
    });

    return reward;
  }
}

export default CreateRewardService;
