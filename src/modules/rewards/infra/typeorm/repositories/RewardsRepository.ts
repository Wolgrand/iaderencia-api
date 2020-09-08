import { getRepository, Repository } from 'typeorm';

import IRewardsRepository from '@modules/rewards/repositories/IRewardsRepository';
import IUpdateRewardDTO from '@modules/rewards/dtos/IUpdateRewardDTO';
import ICreateRewardDTO from '@modules/rewards/dtos/ICreateRewardDTO';
import Reward from '../entities/Reward';

interface IFindRewards {
  id: string;
}

interface IRewards {
  id: string;
  icon: string;
  description: string;
  title: string;
  score: number;
}

class RewardsRepository implements IRewardsRepository {
  private ormRepository: Repository<Reward>;

  constructor() {
    this.ormRepository = getRepository(Reward);
  }

  public async create({
    title,
    score,
    icon,
    description,
  }: ICreateRewardDTO): Promise<Reward> {
    const reward = this.ormRepository.create({
      title,
      score,
      icon,
      description,
    });

    await this.ormRepository.save(reward);

    return reward;
  }

  public async findByName(title: string): Promise<Reward | undefined> {
    const findCriteria = await this.ormRepository.findOne({
      where: { title },
    });

    return findCriteria;
  }

  public async findAllById(rewards: IFindRewards[]): Promise<Reward[]> {
    const findRewards = await this.ormRepository.findByIds(rewards);

    return findRewards;
  }

  public async findAll(): Promise<Reward[]> {
    const findCriterias = await this.ormRepository.find();

    return findCriterias;
  }

  public async findById(id: string): Promise<Reward> {
    const findCriteria = await this.ormRepository.find({
      where: {
        id,
      },
    });

    return findCriteria;
  }

  public async delete(rewards: Reward): Promise<Reward> {
    await this.ormRepository.remove(rewards);

    return rewards;
  }

  public async update(reward: Reward): Promise<Reward> {
    await this.ormRepository.save(reward);

    return reward;
  }
}

export default RewardsRepository;
