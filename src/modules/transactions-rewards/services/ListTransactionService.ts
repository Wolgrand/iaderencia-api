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
  user_id: string;
}

@injectable()
class ListTransactionService {
  constructor(
    @inject('TransactionsRewardRepository')
    private transactionsRewardRepository: ITransactionsRewardsRepository,
    @inject('RewardsRepository')
    private rewardsRepository: IRewardsRepository,
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(): Promise<Transactions_Rewards[] | undefined> {
    const transactions = await this.transactionsRewardRepository.findAll();

    return transactions;
  }
}

export default ListTransactionService;
