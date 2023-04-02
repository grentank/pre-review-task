/* eslint-disable no-unreachable-loop */
class GameBoard {
  constructor(terrainHelper, terrainList, size) {
    this.terrainHelper = terrainHelper;
    this.terrainList = terrainList;
    this.size = size;
  }

  // eslint-disable-next-line consistent-return
  terrainMap() {
    const terrainArr = this.terrainList.map((el) => this.terrainHelper.letterToTerrain(el));
    const arr = [];
    for (let i = 0; i < terrainArr.length; i += this.size) {
      arr.push(terrainArr.slice(i, i + this.size));
    }
    return arr;
  }

  difficultyOfJourney(arr) {
    let score = 0;
    const board = this.terrainMap();
    for (let i = 0; i < arr.length; i += 1) {
      score += this.terrainHelper.scoreDifficulty(board[arr[i][0]][arr[i][1]]);
    }
    return score;
  }
}

module.exports = GameBoard;
