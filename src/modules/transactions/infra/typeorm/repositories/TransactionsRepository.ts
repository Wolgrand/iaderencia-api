import { getRepository, Repository } from 'typeorm';

import ITransactionsRepository from '@modules/transactions/repositories/ITransactionsRepository';
import ICreateTransactionDTO from '@modules/transactions/dtos/ICreateTransactionDTO';
import Transaction from '../entities/Transaction';

class TransactionsRepository implements ITransactionsRepository {
  private ormRepository: Repository<Transaction>;

  constructor() {
    this.ormRepository = getRepository(Transaction);
  }

  public async create({
    user,
    criterias,
  }: ICreateTransactionDTO): Promise<Transaction> {
    const transaction = this.ormRepository.create({
      user,
      transaction_criterias: criterias,
    });

    await this.ormRepository.save(transaction);

    return transaction;
  }

  public async findById(id: string): Promise<Transaction[] | undefined> {
    const findTransaction = await this.ormRepository.find({
      where: {
        user: {
          id,
        },
      },
    });

    return findTransaction;
  }
}

export default TransactionsRepository;
