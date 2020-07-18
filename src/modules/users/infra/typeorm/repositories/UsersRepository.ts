import { getRepository, Repository } from 'typeorm';

import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

import User from '@modules/users/infra/typeorm/entities/User';

import IUsersRepository from '../../../repositories/IUsersRepository';

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async findById(id: string): Promise<User | undefined> {
    const findUser = await this.ormRepository.findOne({
      where: { id },
    });

    return findUser;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const findUser = await this.ormRepository.findOne({
      where: { email },
    });

    return findUser;
  }

  public async findAllGPs(): Promise<User[]> {
    const users = await this.ormRepository.find({
      where: { role: 'player' },
    });

    return users;
  }

  public async findAllUsers(): Promise<User[]> {
    const users = await this.ormRepository.find();

    return users;
  }

  public async create(userData: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create(userData);

    await this.ormRepository.save(userData);

    return user;
  }

  public async save(user: User): Promise<User> {
    return this.ormRepository.save(user);
  }

  public async delete(user: User): Promise<User> {
    return this.ormRepository.remove(user);
  }
}

export default UsersRepository;
