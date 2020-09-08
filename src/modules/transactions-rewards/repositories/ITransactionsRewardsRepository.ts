import TransactionsRewards from '../infra/typeorm/entities/Transactions_Rewards';

import ICreateTransactionReDTO from '../dtos/ICreateTransactionReDTO';

export default interface ITransactionsRewardsRepository {
  create(data: ICreateTransactionReDTO): Promise<TransactionsRewards>;
  findById(transaction_id: string): Promise<TransactionsRewards | undefined>;
  findByUser(user_id: string): Promise<TransactionsRewards[] | undefined>;
  findAll(): Promise<TransactionsRewards[] | undefined>;
  delete(transaction: TransactionsRewards): Promise<TransactionsRewards>;
}
