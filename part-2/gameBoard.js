class GameBoard {
  constructor(terrainHelper, terrainList, size) {
    this.terrainHelper = terrainHelper;
    this.terrainList = terrainList;
    this.size = size;
  }

  terrainMap() {
    const list = this.terrainList.map(this.terrainHelper.letterToTerrain);
    const arr = [];
    for (let i = 0; i < list.length; i += this.size) {
      arr.push(list.slice(i, i + this.size));
    }
    return arr;
  }

  difficultyOfJourney(arr) {
    let score = 0;
    for (let i = 0; i < arr.length; i += 1) {
      const ter = this.terrainMap()[arr[i][0]][arr[i][1]];
      score += this.terrainHelper.scoreDifficulty(ter);
    }
    return score;
  }
}

module.exports = GameBoard;
