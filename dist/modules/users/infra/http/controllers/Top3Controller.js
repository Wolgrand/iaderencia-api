"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _ListRankService = _interopRequireDefault(require("../../../services/ListRankService"));

var _classTransformer = require("class-transformer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Top3Controller {
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

      const top3 = [];
      const length = array.length <= 3 ? array.length : 3;

      for (let i = 0; i < length; i++) {
        top3.push(array[i]);
      }

      return response.json((0, _classTransformer.classToClass)(top3));
    }
  }

}

exports.default = Top3Controller;