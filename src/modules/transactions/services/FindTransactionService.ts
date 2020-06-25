import { inject, injectable } from 'tsyringe';

import ICriteriasRepository from '@modules/criterias/repositories/ICriteriasRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import AppError from '@shared/errors/AppError';
import Transaction from '../infra/typeorm/entities/Transaction';
import ITransactionsRepository from '../repositories/ITransactionsRepository';

interface IRequest {
  id: string;
}

@injectable()
class FindTransactionService {
  constructor(
    @inject('TransactionsRepository')
    private transactionsRepository: ITransactionsRepository,

    @inject('CriteriasRepository')
    private criteriasRepository: ICriteriasRepository,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<Transaction[] | undefined> {
    const transaction = await this.transactionsRepository.findById(id);

    if (!transaction) {
      throw new AppError('Transaction not found');
    }

    return transaction;
  }
}

export default FindTransactionService;
