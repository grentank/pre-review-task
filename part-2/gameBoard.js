class GameBoard {
  constructor(terrainHelper, terrainList, size) {
    this.terrainHelper = terrainHelper;
    this.terrainList = terrainList;
    this.size = size;
  }

  terrainMap() {
    const arr = [];
    for (let i = 0; i < this.size; i += 1) {
      const subArr = [];
      for (let j = 0; j < this.size; j += 1) {
        subArr.push(this.terrainHelper.letterToTerrain(this.terrainList[i * this.size + j]));
      }
      arr.push(subArr);
    }
    return arr;
  }

  difficultyOfJourney(journey) {
    let sum = 0;
    const map = this.terrainMap();
    journey.forEach((element) => {
      sum += this.terrainHelper.scoreDifficulty(map[element[0]][element[1]]);
    });
    return sum;
  }
}

module.exports = GameBoard;
