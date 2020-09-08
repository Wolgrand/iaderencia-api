import { injectable, inject } from 'tsyringe';

import IUsersRepository from '../repositories/IUsersRepository';

import User from '../infra/typeorm/entities/User';

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
