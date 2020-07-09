"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _User = _interopRequireDefault(require("../entities/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UsersRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = (0, _typeorm.getRepository)(_User.default);
  }

  async findById(id) {
    const findUser = await this.ormRepository.findOne({
      where: {
        id
      }
    });
    return findUser;
  }

  async findByEmail(email) {
    const findUser = await this.ormRepository.findOne({
      where: {
        email
      }
    });
    return findUser;
  }

  async findAllGPs() {
    const users = await this.ormRepository.find({
      where: {
        role: 'gp'
      }
    });
    return users;
  }

  async create(userData) {
    const user = this.ormRepository.create(userData);
    await this.ormRepository.save(userData);
    return user;
  }

  async save(user) {
    return this.ormRepository.save(user);
  }

}

var _default = UsersRepository;
exports.default = _default;