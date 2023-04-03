class GameBoard {
  constructor(terrainHelper, terrainList, size) {
    this.terrainHelper = terrainHelper;
    this.terrainList = terrainList;
    this.size = size;
  }

  terrainMap() {
    // напишите этот метод сами
   const arrList = this.terrainList.map((el) => this.terrainHelper.letterToTerrain(el))
   const arrRes = []
   for (let i = 0; i < arrList.length; i+= this.size) {
    arrRes.push(arrList.slice(i, i + this.size))
   }
  return arrRes
  }

  difficultyOfJourney(journey) {
    // напишите этод метод сами
    let res = 0
    for (let i = 0; i < journey.length; i += 1) {
      const a = this.terrainMap()[journey[i][0]][journey[i][1]]
res += this.terrainHelper.scoreDifficulty(a)
    }
return res

  }
}

module.exports = GameBoard;
