"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _CreateCriteriaService = _interopRequireDefault(require("../../../services/CreateCriteriaService"));

var _ListCriteriaService = _interopRequireDefault(require("../../../services/ListCriteriaService"));

var _DeleteCriteriaService = _interopRequireDefault(require("../../../services/DeleteCriteriaService"));

var _UpdateCriteriaService = _interopRequireDefault(require("../../../services/UpdateCriteriaService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CriteriasController {
  async create(request, response) {
    const {
      title,
      icon,
      score
    } = request.body;

    const createCriteria = _tsyringe.container.resolve(_CreateCriteriaService.default);

    const criteria = await createCriteria.execute({
      title,
      icon,
      score
    });
    return response.json(criteria);
  }

  async show(request, response) {
    const listCriterias = _tsyringe.container.resolve(_ListCriteriaService.default);

    const criterias = await listCriterias.execute();
    return response.json(criterias);
  }

  async delete(request, response) {
    const deleteCriteria = _tsyringe.container.resolve(_DeleteCriteriaService.default);

    const {
      id
    } = request.params;
    const criteria = await deleteCriteria.execute(id);
    return response.json(criteria);
  }

  async update(request, response) {
    const {
      title,
      icon,
      score
    } = request.body;

    const updateCriteria = _tsyringe.container.resolve(_UpdateCriteriaService.default);

    const {
      id
    } = request.params;
    const criteria = await updateCriteria.execute({
      id,
      title,
      icon,
      score
    });
    return response.json(criteria);
  }

}

exports.default = CriteriasController;