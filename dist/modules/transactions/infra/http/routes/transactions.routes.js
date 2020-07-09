"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _TransactionsController = _interopRequireDefault(require("../controller/TransactionsController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const transactionsRouter = (0, _express.Router)();
const transactionController = new _TransactionsController.default();
transactionsRouter.post('/', transactionController.create);
transactionsRouter.get('/:user_id', transactionController.show);
var _default = transactionsRouter;
exports.default = _default;