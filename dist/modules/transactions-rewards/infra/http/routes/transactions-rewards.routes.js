"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _TransactionsRewardsController = _interopRequireDefault(require("../controller/TransactionsRewardsController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const transactionsRewardsRouter = (0, _express.Router)();
const transactionController = new _TransactionsRewardsController.default();
transactionsRewardsRouter.post('/', transactionController.create);
transactionsRewardsRouter.get('/:user_id', transactionController.show);
transactionsRewardsRouter.delete('/:id', transactionController.delete);
transactionsRewardsRouter.get('/', transactionController.index);
var _default = transactionsRewardsRouter;
exports.default = _default;