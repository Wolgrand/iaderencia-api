import Reward from '../infra/typeorm/entities/Reward';

import ICreateRewardDTO from '../dtos/ICreateRewardDTO';
import IUpdateRewardDTO from '../dtos/IUpdateRewardDTO';

interface IFindRewards {
  id: string;
}

export default interface IRewardsRepository {
  create(data: ICreateRewardDTO): Promise<Reward>;
  findByName(name: string): Promise<Reward | undefined>;
  findAllById(products: IFindRewards[]): Promise<Reward[]>;
  findById(id: string): Promise<Reward>;
  findAll(): Promise<Reward[]>;
  delete(reward: Reward): Promise<Reward>;
  update(data: IUpdateRewardDTO): Promise<Reward>;
}
