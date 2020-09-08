import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IRewardsRepository from '@modules/rewards/repositories/IRewardsRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import Transactions_Rewards from '../infra/typeorm/entities/Transactions_Rewards';
import ITransactionsRewardsRepository from '../repositories/ITransactionsRewardsRepository';

interface IReward {
  id: string;
  score: number;
}

interface IRequest {
  id: string;
}

@injectable()
class FindTransactionService {
  constructor(
    @inject('TransactionsRewardRepository')
    private transactionsRewardRepository: ITransactionsRewardsRepository,
    @inject('RewardsRepository')
    private rewardsRepository: IRewardsRepository,
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    id,
  }: IRequest): Promise<Transactions_Rewards | undefined> {
    const transaction = await this.transactionsRewardRepository.findById(id);

    if (!transaction) {
      throw new AppError('Transaction not found');
    }

    await this.transactionsRewardRepository.delete(transaction);

    return transaction;
  }
}

export default FindTransactionService;
