"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _IRewardsRepository = _interopRequireDefault(require("../../rewards/repositories/IRewardsRepository"));

var _IUsersRepository = _interopRequireDefault(require("../../users/repositories/IUsersRepository"));

var _ITransactionsRewardsRepository = _interopRequireDefault(require("../repositories/ITransactionsRewardsRepository"));

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let CreateTransactionService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('TransactionsRewardRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('RewardsRepository')(target, undefined, 1);
}, _dec4 = function (target, key) {
  return (0, _tsyringe.inject)('UsersRepository')(target, undefined, 2);
}, _dec5 = Reflect.metadata("design:type", Function), _dec6 = Reflect.metadata("design:paramtypes", [typeof _ITransactionsRewardsRepository.default === "undefined" ? Object : _ITransactionsRewardsRepository.default, typeof _IRewardsRepository.default === "undefined" ? Object : _IRewardsRepository.default, typeof _IUsersRepository.default === "undefined" ? Object : _IUsersRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = class CreateTransactionService {
  constructor(transactionsRewardRepository, rewardsRepository, usersRepository) {
    this.transactionsRewardRepository = transactionsRewardRepository;
    this.rewardsRepository = rewardsRepository;
    this.usersRepository = usersRepository;
  }

  async execute({
    user_id,
    reward_id,
    score
  }) {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new _AppError.default('User does not exists');
    }

    const reward = await this.rewardsRepository.findById(reward_id);

    if (!reward) {
      throw new _AppError.default('Reward does not exists');
    }

    user.score += Math.ceil(score);
    const transaction = await this.transactionsRewardRepository.create({
      user_id,
      reward_id,
      score
    });
    await this.usersRepository.save(user);
    return transaction;
  }

}) || _class) || _class) || _class) || _class) || _class) || _class);
var _default = CreateTransactionService;
exports.default = _default;