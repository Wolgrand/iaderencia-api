import { Request, Response } from 'express';

import { container } from 'tsyringe';
import { format } from 'date-fns';

import CreateTransactionService from '@modules/transactions/services/CreateTransactionService';
import FindTransactionService from '@modules/transactions/services/FindTransactionService';
import { classToClass } from 'class-transformer';

interface ITransaction_Criterias {
  id: string;
  criteria_id: string;
  transaction_id: string;
  score: number;
  created_at: string;
  updated_at: string;
  criteria: {
    id: string;
    title: string;
    icon: string;
    score: number;
    created_at: Date;
    updated_at: Date;
  };
}

export default class TransactionController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;

    const findTransaction = container.resolve(FindTransactionService);

    const transaction = await findTransaction.execute({
      user_id,
    });

    /*     if (transaction) {
      const transactions = Object.assign(
        transaction?.map(item => item.transaction_criterias[0].created_at),
      );} */

    return response.json(classToClass(transaction));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { user_id, criterias, newScore } = request.body;

    const createTransaction = container.resolve(CreateTransactionService);

    const transaction = await createTransaction.execute({
      user_id,
      criterias,
      newScore,
    });

    return response.json(transaction);
  }
}
