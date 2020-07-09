"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Transaction = _interopRequireDefault(require("../entities/Transaction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TransactionsRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = (0, _typeorm.getRepository)(_Transaction.default);
  }

  async create({
    user,
    criterias
  }) {
    const transaction = this.ormRepository.create({
      user,
      transaction_criterias: criterias
    });
    await this.ormRepository.save(transaction);
    return transaction;
  }

  async findById(id) {
    const findTransaction = await this.ormRepository.find({
      where: {
        user: {
          id
        }
      }
    });
    return findTransaction;
  }

}

var _default = TransactionsRepository;
exports.default = _default;