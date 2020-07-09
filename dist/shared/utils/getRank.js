"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getRanks;

function getRanks(items) {
  const itemScoresMap = items.reduce((r, x) => r.set(x.id, x.score), new Map());
  const uniqueScores = new Set(itemScoresMap.values());
  const orderedScores = Array.from(uniqueScores).sort((a, b) => b - a);
  return items.map(x => {
    const id = x.id;
    const score = itemScoresMap.get(id);
    return {
      id,
      rank: orderedScores.indexOf(score) + 1
    };
  }).reduce((r, x) => r.set(x.id, x.rank), new Map());
}