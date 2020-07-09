"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _CreateTransactionService = _interopRequireDefault(require("../../../services/CreateTransactionService"));

var _FindTransactionService = _interopRequireDefault(require("../../../services/FindTransactionService"));

var _classTransformer = require("class-transformer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TransactionController {
  async show(request, response) {
    const {
      user_id
    } = request.params;

    const findTransaction = _tsyringe.container.resolve(_FindTransactionService.default);

    const transaction = await findTransaction.execute({
      user_id
    });
    /*     if (transaction) {
      const transactions = Object.assign(
        transaction?.map(item => item.transaction_criterias[0].created_at),
      );} */

    return response.json((0, _classTransformer.classToClass)(transaction));
  }

  async create(request, response) {
    const {
      user_id,
      criterias,
      newScore
    } = request.body;

    const createTransaction = _tsyringe.container.resolve(_CreateTransactionService.default);

    const transaction = await createTransaction.execute({
      user_id,
      criterias,
      newScore
    });
    return response.json(transaction);
  }

}

exports.default = TransactionController;