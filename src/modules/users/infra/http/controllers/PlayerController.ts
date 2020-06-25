import { Request, Response } from 'express';
import { container } from 'tsyringe';

import PlayerService from '@modules/users/services/PlayerService';
import { classToClass } from 'class-transformer';

export default class PlayerController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;

    const playerService = container.resolve(PlayerService);

    const player = await playerService.execute(user_id);

    return response.json(classToClass(player));
  }
}
