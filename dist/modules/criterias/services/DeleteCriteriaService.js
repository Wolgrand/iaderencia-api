"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _ICriteriasRepository = _interopRequireDefault(require("../repositories/ICriteriasRepository"));

var _dec, _dec2, _dec3, _dec4, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let DeleteCriteriaService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('CriteriasRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _ICriteriasRepository.default === "undefined" ? Object : _ICriteriasRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class DeleteCriteriaService {
  constructor(criteriasRepository) {
    this.criteriasRepository = criteriasRepository;
  }

  async execute(id) {
    const findCriteria = await this.criteriasRepository.findById(id);
    await this.criteriasRepository.delete(findCriteria);
    return findCriteria;
  }

}) || _class) || _class) || _class) || _class);
var _default = DeleteCriteriaService;
exports.default = _default;