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
  newScore: number;
  criterias: ICriteria[];
}

@injectable()
class CreateTransactionService {
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
    criterias,
    newScore,
  }: IRequest): Promise<Transaction> {
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

    const criteriasList = criteriaItems.map(criteriaItem => {
      const criteriaList = criterias.find(
        criteriaFind => criteriaFind.id === criteriaItem.id,
      );

      if (!criteriaList) {
        throw new AppError('Criteria not found');
      }

      return {
        criteria_id: criteriaItem.id,
        score: criteriaItem.score,
      };
    });

    /*     user.score = criteriasList.reduce((sum: number, { score }) => {
      return sum + score;
    }, 0); */

    user.score += Math.ceil(newScore);

    const transaction = await this.transactionsRepository.create({
      user,
      criterias: criteriasList,
    });

    await this.usersRepository.save(user);

    return transaction;
  }
}

export default CreateTransactionService;
