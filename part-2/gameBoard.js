class GameBoard {
  constructor(terrainHelper, terrainList, size) {
    this.terrainHelper = terrainHelper;
    this.terrainList = terrainList;
    this.size = size;
  }

  terrainMap() {
    const arr = [];
    const result = this.terrainList.map((el) => this.terrainHelper.letterToTerrain(el));
    for (let i = 0; i < this.terrainList.length; i += this.size) {
      arr.push(result.splice(0, this.size));
    }
    return arr;
  }

  difficultyOfJourney(journey) {
    let result = 0;
    const terrain = this.terrainMap();
    for (let i = 0; i < journey.length; i++) {
      const terrainRes = terrain[journey[i][0]][journey[i][1]];
      result += this.terrainHelper.scoreDifficulty(terrainRes);
    }
    return result
  }
}
module.exports = GameBoard;
