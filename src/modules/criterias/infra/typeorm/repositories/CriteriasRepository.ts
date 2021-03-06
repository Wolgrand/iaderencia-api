import { getRepository, Repository } from 'typeorm';

import ICriteriasRepository from '@modules/criterias/repositories/ICriteriasRepository';
import ICreateCriteriaDTO from '@modules/criterias/dtos/ICreateCriteriaDTO';
import Criteria from '../entities/Criteria';

interface IFindCriterias {
  id: string;
}

interface ICriterias {
  id: string;
  icon: string;
  title: string;
  score: number;
}

class CriteriasRepository implements ICriteriasRepository {
  private ormRepository: Repository<Criteria>;

  constructor() {
    this.ormRepository = getRepository(Criteria);
  }

  public async create({
    title,
    score,
    icon,
  }: ICreateCriteriaDTO): Promise<Criteria> {
    const criteria = this.ormRepository.create({
      title,
      score,
      icon,
    });

    await this.ormRepository.save(criteria);

    return criteria;
  }

  public async findByName(title: string): Promise<Criteria | undefined> {
    const findCriteria = await this.ormRepository.findOne({
      where: { title },
    });

    return findCriteria;
  }

  public async findAllById(criterias: IFindCriterias[]): Promise<Criteria[]> {
    const findCriterias = await this.ormRepository.findByIds(criterias);

    return findCriterias;
  }

  public async findAll(): Promise<Criteria[]> {
    const findCriterias = await this.ormRepository.find();

    return findCriterias;
  }

  public async findById(id: string): Promise<Criteria> {
    const findCriteria = await this.ormRepository.find({
      where: {
        id,
      },
    });

    return findCriteria;
  }

  public async delete(criteria: Criteria): Promise<Criteria> {
    await this.ormRepository.remove(criteria);

    return criteria;
  }

  public async update(criteria: Criteria): Promise<Criteria> {
    await this.ormRepository.save(criteria);

    return criteria;
  }
}

export default CriteriasRepository;
