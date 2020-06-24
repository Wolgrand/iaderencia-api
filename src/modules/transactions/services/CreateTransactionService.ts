import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import ICriteriasRepository from '@modules/criterias/repositories/ICriteriasRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import Transaction from '../infra/typeorm/entities/Transaction';
import ITransactionsRepository from '../repositories/ITransactionsRepository';

interface ICriteria {
  id: string;
  score: number;
}

interface IRequest {
  user_id: string;
  criterias: ICriteria[];
}

@injectable()
class CreateTransactionService {
  constructor(
    @inject('TransactionRepository')
    private transactionsRepository: ITransactionsRepository,
    @inject('CriteriasRepository')
    private criteriasRepository: ICriteriasRepository,
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ user_id, criterias }: IRequest): Promise<Transaction> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User does not exists');
    }

    const criteriasIDs = criterias.map(criteria => {
      return { id: criteria.id };
    });

    const criteriaItems = await this.criteriasRepository.findAllById(
      criteriasIDs,
    );

    if (criteriaItems.length !== criterias.length) {
      throw new AppError('Product missing');
    }

    const criteriasList = criteriaItems.map(criteriaItem => {
      const criteriaList = criterias.find(
        criteriaFind => criteriaFind.id === criteriaItem.id,
      );

      if (!criteriaList) {
        throw new AppError('Product not found');
      }

      return {
        criteria_id: criteriaItem.id,
        score: criteriaItem.score,
      };
    });

    const transaction = await this.transactionsRepository.create({
      user,
      criterias: criteriasList,
    });

    //await this.productsRepository.updateQuantity(transaction);

    return transaction;
  }
}

export default CreateTransactionService;
