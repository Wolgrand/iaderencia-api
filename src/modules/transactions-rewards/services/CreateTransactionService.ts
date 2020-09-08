import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IRewardsRepository from '@modules/rewards/repositories/IRewardsRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import TransactionsRewards from '../infra/typeorm/entities/Transactions_Rewards';
import ITransactionsRewardsRepository from '../repositories/ITransactionsRewardsRepository';

interface IReward {
  id: string;
  score: number;
}

interface IRequest {
  user_id: string;
  score: number;
  reward_id: string;
}

@injectable()
class CreateTransactionService {
  constructor(
    @inject('TransactionsRewardRepository')
    private transactionsRewardRepository: ITransactionsRewardsRepository,
    @inject('RewardsRepository')
    private rewardsRepository: IRewardsRepository,
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    user_id,
    reward_id,
    score,
  }: IRequest): Promise<TransactionsRewards> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User does not exists');
    }

    const reward = await this.rewardsRepository.findById(reward_id);

    if (!reward) {
      throw new AppError('Reward does not exists');
    }

    user.score += Math.ceil(score);

    const transaction = await this.transactionsRewardRepository.create({
      user_id,
      reward_id,
      score,
    });

    await this.usersRepository.save(user);

    return transaction;
  }
}

export default CreateTransactionService;
