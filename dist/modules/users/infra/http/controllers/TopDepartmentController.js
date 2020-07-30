"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _ListRankService = _interopRequireDefault(require("../../../services/ListRankService"));

var _classTransformer = require("class-transformer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TopDepartmentController {
  async show(request, response) {
    const listGPs = _tsyringe.container.resolve(_ListRankService.default);

    const list = await listGPs.execute();

    if (list) {
      const array = [];

      for (let key in list) {
        array.push(list[key]);
      }

      array.sort(function (a, b) {
        return b.score - a.score;
      });
      let rank = 1;

      for (let i = 0; i < array.length; i++) {
        if (i > 0 && array[i].score < array[i - 1].score) {
          rank++;
        }

        array[i].rank = rank;
      }

      const departments = array.map(e => e.department).filter((v, i, a) => a.indexOf(v) === i);
      const departmentTotalScore = [];
      Array.from(new Set(array.map(x => x.department))).forEach(x => {
        departmentTotalScore.push(array.filter(y => y.department === x).reduce((output, item) => {
          const departmentSum = array.filter(y => y.department === x).reduce((a, b) => +a + +b.score, 0);
          const countDepartment = array.filter(item => item.department === x).length;
          const average = Math.ceil(departmentSum / countDepartment);
          output['department'] = x;
          output['average'] = average;
          return output;
        }, {}));
      });
      const departmentRank = [];

      if (departmentTotalScore) {
        for (let key in departmentTotalScore) {
          departmentRank.push(departmentTotalScore[key]);
        }

        departmentRank.sort(function (a, b) {
          return b.average - a.average;
        });
        let rank = 1;

        for (let i = 0; i < departmentRank.length; i++) {
          if (i > 0 && departmentRank[i].average < departmentRank[i - 1].average) {
            rank++;
          }

          departmentRank[i].rank = rank;
        }
      }

      return response.json((0, _classTransformer.classToClass)(departmentRank));
    }
  }

}

exports.default = TopDepartmentController;