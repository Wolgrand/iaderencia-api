"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _classTransformer = require("class-transformer");

var _CreateTransactionService = _interopRequireDefault(require("../../../services/CreateTransactionService"));

var _FindTransactionService = _interopRequireDefault(require("../../../services/FindTransactionService"));

var _DeleteTransactionService = _interopRequireDefault(require("../../../services/DeleteTransactionService"));

var _ListTransactionService = _interopRequireDefault(require("../../../services/ListTransactionService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TransactionRewardsController {
  async show(request, response) {
    const {
      user_id
    } = request.params;

    const findTransaction = _tsyringe.container.resolve(_FindTransactionService.default);

    const transaction = await findTransaction.execute({
      user_id
    });
    return response.json((0, _classTransformer.classToClass)(transaction));
  }

  async delete(request, response) {
    const {
      id
    } = request.params;

    const deleteTransaction = _tsyringe.container.resolve(_DeleteTransactionService.default);

    const transaction = await deleteTransaction.execute({
      id
    });
    return response.json((0, _classTransformer.classToClass)(transaction));
  }

  async create(request, response) {
    const {
      user_id,
      reward_id,
      score
    } = request.body;

    const createTransaction = _tsyringe.container.resolve(_CreateTransactionService.default);

    const transaction = await createTransaction.execute({
      user_id,
      reward_id,
      score
    });
    return response.json((0, _classTransformer.classToClass)(transaction));
  }

  async index(request, response) {
    const listTransactions = _tsyringe.container.resolve(_ListTransactionService.default);

    const transactions = listTransactions.execute();
    return response.json(transactions);
  }

}

exports.default = TransactionRewardsController;