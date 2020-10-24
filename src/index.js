
// You should implement your task here.

module.exports = function towelSort(matrix) {

  if (arguments.length === 0) return [];

  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i] instanceof Array) {
      i % 2 === 0 ? result.push(...matrix[i]) : result.push(...matrix[i].reverse());
    }
  }
  return result;
}
