"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Reward = _interopRequireDefault(require("../entities/Reward"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class RewardsRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = (0, _typeorm.getRepository)(_Reward.default);
  }

  async create({
    title,
    score,
    icon,
    description
  }) {
    const reward = this.ormRepository.create({
      title,
      score,
      icon,
      description
    });
    await this.ormRepository.save(reward);
    return reward;
  }

  async findByName(title) {
    const findCriteria = await this.ormRepository.findOne({
      where: {
        title
      }
    });
    return findCriteria;
  }

  async findAllById(rewards) {
    const findRewards = await this.ormRepository.findByIds(rewards);
    return findRewards;
  }

  async findAll() {
    const findCriterias = await this.ormRepository.find();
    return findCriterias;
  }

  async findById(id) {
    const findCriteria = await this.ormRepository.find({
      where: {
        id
      }
    });
    return findCriteria;
  }

  async delete(rewards) {
    await this.ormRepository.remove(rewards);
    return rewards;
  }

  async update(reward) {
    await this.ormRepository.save(reward);
    return reward;
  }

}

var _default = RewardsRepository;
exports.default = _default;