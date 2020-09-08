import { Request, Response } from 'express';

import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateTransactionRewardService from '@modules/transactions-rewards/services/CreateTransactionService';
import FindTransactionRewardService from '@modules/transactions-rewards/services/FindTransactionService';
import DeleteTransactionService from '@modules/transactions-rewards/services/DeleteTransactionService';
import ListTransactionService from '@modules/transactions-rewards/services/ListTransactionService';

export default class TransactionRewardsController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;

    const findTransaction = container.resolve(FindTransactionRewardService);

    const transaction = await findTransaction.execute({
      user_id,
    });

    return response.json(classToClass(transaction));
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteTransaction = container.resolve(DeleteTransactionService);

    const transaction = await deleteTransaction.execute({
      id,
    });

    return response.json(classToClass(transaction));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { user_id, reward_id, score } = request.body;

    const createTransaction = container.resolve(CreateTransactionRewardService);

    const transaction = await createTransaction.execute({
      user_id,
      reward_id,
      score,
    });

    return response.json(classToClass(transaction));
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listTransactions = container.resolve(ListTransactionService);

    const transactions = listTransactions.execute();

    return response.json(transactions);
  }
}
