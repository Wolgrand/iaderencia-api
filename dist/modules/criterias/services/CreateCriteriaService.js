"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _ICriteriasRepository = _interopRequireDefault(require("../repositories/ICriteriasRepository"));

var _dec, _dec2, _dec3, _dec4, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let CreateCriteriaService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('CriteriasRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _ICriteriasRepository.default === "undefined" ? Object : _ICriteriasRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CreateCriteriaService {
  constructor(criteriasRepository) {
    this.criteriasRepository = criteriasRepository;
  }

  async execute({
    title,
    icon,
    score
  }) {
    const checkCriteriaExist = await this.criteriasRepository.findByName(title);

    if (checkCriteriaExist) {
      throw new _AppError.default('Criteria already exists.');
    }

    const criteria = await this.criteriasRepository.create({
      title,
      icon,
      score
    });
    return criteria;
  }

}) || _class) || _class) || _class) || _class);
var _default = CreateCriteriaService;
exports.default = _default;