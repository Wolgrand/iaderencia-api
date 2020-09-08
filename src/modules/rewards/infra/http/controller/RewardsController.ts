import { Request, Response } from 'express';

import { container } from 'tsyringe';
import CreateRewardService from '@modules/rewards/services/CreateRewardService';
import ListRewardService from '@modules/rewards/services/ListRewardService';
import DeleteRewardService from '@modules/rewards/services/DeleteRewardService';
import UpdateRewardService from '@modules/rewards/services/UpdateRewardService';

export default class RewardsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { title, icon, score, description } = request.body;

    const createReward = container.resolve(CreateRewardService);

    const reward = await createReward.execute({
      title,
      icon,
      score,
      description,
    });

    return response.json(reward);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const listRewards = container.resolve(ListRewardService);

    const rewards = await listRewards.execute();

    return response.json(rewards);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const deleteReward = container.resolve(DeleteRewardService);

    const { id } = request.params;

    const reward = await deleteReward.execute(id);

    return response.json(reward);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { title, icon, score, description } = request.body;

    const updateReward = container.resolve(UpdateRewardService);

    const { id } = request.params;

    const reward = await updateReward.execute({
      id,
      title,
      icon,
      score,
      description,
    });

    return response.json(reward);
  }
}
