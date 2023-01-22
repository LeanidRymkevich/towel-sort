
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined) {
        return [];
    }

    if (matrix.length === 0) {
        return [];
    }


    for(let i = 1; i < matrix.length; i += 2){
        matrix[i].reverse();
      }
    
      let result = [];
      matrix.forEach(element => {
        result.push(...element)
      });
      return result;
}
