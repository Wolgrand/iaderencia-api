"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _ICriteriasRepository = _interopRequireDefault(require("../../criterias/repositories/ICriteriasRepository"));

var _IUsersRepository = _interopRequireDefault(require("../../users/repositories/IUsersRepository"));

var _ITransactionsRepository = _interopRequireDefault(require("../repositories/ITransactionsRepository"));

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let CreateTransactionService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('TransactionsRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('CriteriasRepository')(target, undefined, 1);
}, _dec4 = function (target, key) {
  return (0, _tsyringe.inject)('UsersRepository')(target, undefined, 2);
}, _dec5 = Reflect.metadata("design:type", Function), _dec6 = Reflect.metadata("design:paramtypes", [typeof _ITransactionsRepository.default === "undefined" ? Object : _ITransactionsRepository.default, typeof _ICriteriasRepository.default === "undefined" ? Object : _ICriteriasRepository.default, typeof _IUsersRepository.default === "undefined" ? Object : _IUsersRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = class CreateTransactionService {
  constructor(transactionsRepository, criteriasRepository, usersRepository) {
    this.transactionsRepository = transactionsRepository;
    this.criteriasRepository = criteriasRepository;
    this.usersRepository = usersRepository;
  }

  async execute({
    user_id,
    criterias,
    newScore
  }) {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new _AppError.default('User does not exists');
    }

    const criteriasIDs = criterias.map(criteria => {
      return {
        id: criteria.id
      };
    });
    const criteriaItems = await this.criteriasRepository.findAllById(criteriasIDs);
    const criteriasList = criteriaItems.map(criteriaItem => {
      const criteriaList = criterias.find(criteriaFind => criteriaFind.id === criteriaItem.id);

      if (!criteriaList) {
        throw new _AppError.default('Criteria not found');
      }

      return {
        criteria_id: criteriaItem.id,
        score: criteriaItem.score
      };
    });
    /*     user.score = criteriasList.reduce((sum: number, { score }) => {
      return sum + score;
    }, 0); */

    user.score += Math.ceil(newScore);
    const transaction = await this.transactionsRepository.create({
      user,
      criterias: criteriasList
    });
    await this.usersRepository.save(user);
    return transaction;
  }

}) || _class) || _class) || _class) || _class) || _class) || _class);
var _default = CreateTransactionService;
exports.default = _default;