"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Transactions_Rewards = _interopRequireDefault(require("../entities/Transactions_Rewards"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TransactionsRewardRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = (0, _typeorm.getRepository)(_Transactions_Rewards.default);
  }

  async create({
    user_id,
    reward_id,
    score
  }) {
    const transaction = this.ormRepository.create({
      user_id,
      reward_id,
      score
    });
    await this.ormRepository.save(transaction);
    return transaction;
  }

  async findByUser(user_id) {
    const findTransaction = await this.ormRepository.find({
      where: {
        user_id: user_id
      }
    });
    return findTransaction;
  }

  async findById(id) {
    const findTransaction = await this.ormRepository.find({
      where: {
        id
      }
    });
    return findTransaction;
  }

  async delete(transaction) {
    await this.ormRepository.remove(transaction);
    return transaction;
  }

  async findAll() {
    const transactions = await this.ormRepository.find();
    return transactions;
  }

}

var _default = TransactionsRewardRepository;
exports.default = _default;