import { inject, injectable } from 'tsyringe';

import Reward from '../infra/typeorm/entities/Reward';
import IRewardsRepository from '../repositories/IRewardsRepository';

interface IRequest {
  title: string;
  score: number;
  icon: string;
}

interface IReward {
  id: string;
  title: string;
  score: number;
  icon: string;
}

@injectable()
class ListRewardService {
  constructor(
    @inject('RewardsRepository')
    private rewardsRepository: IRewardsRepository,
  ) {}

  public async execute(): Promise<Reward[]> {
    const findAllRewards = await this.rewardsRepository.findAll();

    return findAllRewards;
  }
}

export default ListRewardService;
