import { inject, injectable } from 'tsyringe';

import Reward from '../infra/typeorm/entities/Reward';
import IRewardsRepository from '../repositories/IRewardsRepository';

interface IRequest {
  title: string;
  score: number;
  icon: string;
  description: string;
}

@injectable()
class DeleteRewardService {
  constructor(
    @inject('RewardsRepository')
    private rewardsRepository: IRewardsRepository,
  ) {}

  public async execute(id: string): Promise<Reward> {
    const findReward = await this.rewardsRepository.findById(id);

    await this.rewardsRepository.delete(findReward);

    return findReward;
  }
}

export default DeleteRewardService;
