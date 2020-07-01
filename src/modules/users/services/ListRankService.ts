import { injectable, inject } from 'tsyringe';

import User from '@modules/users/infra/typeorm/entities/User';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import ITransactionsRepository from '@modules/transactions/repositories/ITransactionsRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
  role: string;
  score: number;
}

@injectable()
class ListRankService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(): Promise<User[]> {
    const FindGPs = await this.usersRepository.findAllGPs();

    return FindGPs;
  }
}

export default ListRankService;
