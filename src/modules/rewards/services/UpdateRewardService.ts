import { inject, injectable } from 'tsyringe';

import Reward from '../infra/typeorm/entities/Reward';
import IRewardsRepository from '../repositories/IRewardsRepository';

interface IReward {
  id: string;
  title: string;
  score: number;
  icon: string;
  description: string;
}

@injectable()
class UpdateRewardService {
  constructor(
    @inject('RewardsRepository')
    private rewardsRepository: IRewardsRepository,
  ) {}

  public async execute({
    id,
    title,
    score,
    icon,
    description,
  }: IReward): Promise<IReward> {
    const updatedReward = { id, title, score, icon, description };

    await this.rewardsRepository.update(updatedReward);

    return updatedReward;
  }
}

export default UpdateRewardService;
