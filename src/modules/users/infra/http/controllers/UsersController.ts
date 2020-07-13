import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateUserService from '@modules/users/services/CreateUserService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password, role, department, company } = request.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      name,
      email,
      password,
      role,
      department,
      company,
    });

    delete user.password;

    return response.json(classToClass(user));
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const findUsers = container.resolve(CreateUserService);

    const users = await findUsers.show();

    return response.json(classToClass(users));
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findUser = container.resolve(CreateUserService);

    const user = await findUser.delete(id);

    return response.json(classToClass(user));
  }
}
