import Transaction from '../infra/typeorm/entities/Transaction';

import ICreateTransactionDTO from '../dtos/ICreateTransactionDTO';

export default interface ITransactionsRepository {
  create(data: ICreateTransactionDTO): Promise<Transaction>;
  findById(user_id: string): Promise<Transaction[] | undefined>;
}
