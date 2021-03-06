import ICreateUserDTO from '../dtos/ICreateUserDTO';
import IUpdateUserScoreDTO from '../dtos/IUpdateUserScoreDTO';

import User from '../infra/typeorm/entities/User';

export default interface IUsersRepository {
  findAllGPs(): Promise<User[]>;
  findAllUsers(): Promise<User[]>;
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  create(data: ICreateUserDTO): Promise<User>;
  save(user: User): Promise<User>;
  delete(user: User): Promise<User>;
}
