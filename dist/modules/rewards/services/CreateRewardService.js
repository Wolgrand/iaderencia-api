"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _IRewardsRepository = _interopRequireDefault(require("../repositories/IRewardsRepository"));

var _dec, _dec2, _dec3, _dec4, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let CreateRewardService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('RewardsRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IRewardsRepository.default === "undefined" ? Object : _IRewardsRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CreateRewardService {
  constructor(rewardsRepository) {
    this.rewardsRepository = rewardsRepository;
  }

  async execute({
    title,
    icon,
    score,
    description
  }) {
    const checkRewardExist = await this.rewardsRepository.findByName(title);

    if (checkRewardExist) {
      throw new _AppError.default('Criteria already exists.');
    }

    const reward = await this.rewardsRepository.create({
      title,
      icon,
      score,
      description
    });
    return reward;
  }

}) || _class) || _class) || _class) || _class);
var _default = CreateRewardService;
exports.default = _default;