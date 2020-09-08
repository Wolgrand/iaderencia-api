import { getRepository, Repository } from 'typeorm';

import ITransactionsRewardsRepository from '@modules/transactions-rewards/repositories/ITransactionsRewardsRepository';
import ICreateTransactionReDTO from '@modules/transactions-rewards/dtos/ICreateTransactionReDTO';
import TransactionsRewards from '../entities/Transactions_Rewards';

class TransactionsRewardRepository implements ITransactionsRewardsRepository {
  private ormRepository: Repository<TransactionsRewards>;

  constructor() {
    this.ormRepository = getRepository(TransactionsRewards);
  }

  public async create({
    user_id,
    reward_id,
    score,
  }: ICreateTransactionReDTO): Promise<TransactionsRewards> {
    const transaction = this.ormRepository.create({
      user_id,
      reward_id,
      score,
    });

    await this.ormRepository.save(transaction);

    return transaction;
  }

  public async findByUser(
    user_id: string,
  ): Promise<TransactionsRewards[] | undefined> {
    const findTransaction = await this.ormRepository.find({
      where: {
        user_id: user_id,
      },
    });

    return findTransaction;
  }

  public async findById(id: string): Promise<any> {
    const findTransaction = await this.ormRepository.find({
      where: {
        id,
      },
    });

    return findTransaction;
  }
  public async delete(
    transaction: TransactionsRewards,
  ): Promise<TransactionsRewards> {
    await this.ormRepository.remove(transaction);

    return transaction;
  }

  public async findAll(): Promise<TransactionsRewards[]> {
    const transactions = await this.ormRepository.find();

    return transactions;
  }
}

export default TransactionsRewardRepository;
