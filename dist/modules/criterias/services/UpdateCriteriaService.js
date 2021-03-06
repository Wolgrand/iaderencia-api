"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _ICriteriasRepository = _interopRequireDefault(require("../repositories/ICriteriasRepository"));

var _dec, _dec2, _dec3, _dec4, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let UpdateCriteriaService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('CriteriasRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _ICriteriasRepository.default === "undefined" ? Object : _ICriteriasRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class UpdateCriteriaService {
  constructor(criteriasRepository) {
    this.criteriasRepository = criteriasRepository;
  }

  async execute({
    id,
    title,
    score,
    icon
  }) {
    const updatedCriteria = {
      id,
      title,
      score,
      icon
    };
    await this.criteriasRepository.update(updatedCriteria);
    return updatedCriteria;
  }

}) || _class) || _class) || _class) || _class);
var _default = UpdateCriteriaService;
exports.default = _default;