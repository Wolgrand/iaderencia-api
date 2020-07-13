import { injectable, inject } from 'tsyringe';

import User from '@modules/users/infra/typeorm/entities/User';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IHashProvider from '@modules/users/providers/HashProvider/models/IHashProvider';
import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';

import AppError from '@shared/errors/AppError';

interface IRequest {
  name: string;
  email: string;
  password: string;
  role?: string;
  score?: number;
  company?: string;
  department?: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({
    name,
    email,
    password,
    role,
    company,
    department,
  }: IRequest): Promise<User> {
    const checkUserExists = await this.usersRepository.findByEmail(email);

    if (checkUserExists) {
      throw new AppError('Email address already used.');
    }

    const hashedPassword = await this.hashProvider.generateHash(password);

    let setRole = 'gp';
    let setDepartment = '';
    let setCompany = '';

    if (role) {
      setRole = role;
    }

    if (department) {
      setDepartment = department;
    }

    if (company) {
      setCompany = company;
    }

    const user = await this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
      score: 0,
      role: setRole,
      company: setCompany,
      department: setDepartment,
    });

    return user;
  }

  public async show(): Promise<User[] | undefined> {
    const users = await this.usersRepository.findAllUsers();

    return users;
  }

  public async delete(id: string): Promise<User | undefined> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError('User not found');
    }

    await this.usersRepository.delete(user);
    return user;
  }
}

export default CreateUserService;
