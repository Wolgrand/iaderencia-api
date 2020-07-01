import { inject, injectable } from 'tsyringe';

import ICriteriasRepository from '@modules/criterias/repositories/ICriteriasRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import AppError from '@shared/errors/AppError';
import Transaction from '../infra/typeorm/entities/Transaction';
import ITransactionsRepository from '../repositories/ITransactionsRepository';

interface IRequest {
  user_id: string;
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

  public async execute({
    user_id,
  }: IRequest): Promise<Transaction[] | undefined> {
    const transactions = await this.transactionsRepository.findById(user_id);

    if (!transactions) {
      throw new AppError('Transactions not found');
    }

    return transactions;
  }
}

export default FindTransactionService;
