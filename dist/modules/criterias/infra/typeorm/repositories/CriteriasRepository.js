"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Criteria = _interopRequireDefault(require("../entities/Criteria"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CriteriasRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = (0, _typeorm.getRepository)(_Criteria.default);
  }

  async create({
    title,
    score,
    icon
  }) {
    const criteria = this.ormRepository.create({
      title,
      score,
      icon
    });
    await this.ormRepository.save(criteria);
    return criteria;
  }

  async findByName(title) {
    const findCriteria = await this.ormRepository.findOne({
      where: {
        title
      }
    });
    return findCriteria;
  }

  async findAllById(criterias) {
    const findCriterias = await this.ormRepository.findByIds(criterias);
    return findCriterias;
  }

  async findAll() {
    const findCriterias = await this.ormRepository.find();
    return findCriterias;
  }

}

var _default = CriteriasRepository;
exports.default = _default;