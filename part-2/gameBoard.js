class GameBoard {
  constructor(terrainHelper, terrainList, size) {
    this.terrainHelper = terrainHelper;
    this.terrainList = terrainList;
    this.size = size;
  }

  terrainMap() {
    const arr = [];
   const arrey = this.terrainList.map((el)=> this.terrainHelper.letterToTerrain(el))
    for(let i = 0; i < this.terrainList.length; i+= this.size) {
      arr.push(arrey.slice(i, i+ this.size))
    }
    return arr
  }

  difficultyOfJourney(arr) {
   const dosk =  this.terrainMap()
   let count = 0
   for(let i = 0; i < arr.length; i+=1){
   count += this.terrainHelper.scoreDifficulty(dosk[arr[i][0]][arr[i][1]])
   
   
  }
  return count
}
}
module.exports = GameBoard;
