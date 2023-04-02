const TerrainHelper = require('./terrainHelper');

class GameBoard {
  constructor(terrainHelper, terrainList, size) {
    this.terrainHelper = terrainHelper;
    this.terrainList = terrainList;
    this.size = size;
  }

  terrainMap() {
    let map = this.terrainList.map((e) => this.terrainHelper.letterToTerrain(e));
    let res = [];
    for (let i = 0; i < map.length; i += this.size) {
      res.push(map.slice(i, i + this.size));
    }
    return res;
  }
  // terrainMap(arr) {
  //   let newArr = [];
  //     for (let i = 0; i < this.terrainList.length; i += this.size) {
  //       let transit = [];
  //       for (let j = i; j < i + this.size; j++) {
  //         transit.push(this.terrainHelper.letterToTerrain(arr[j]));
  //       }
  //       newArr.push(transit);
  //     }
  
  //   return newArr
  // }


  difficultyOfJourney(coor) {
    let res = [];
    for (let i = 0; i < coor.length; i++) {
      res.push(this.terrainMap()[coor[i][0]][coor[i][1]]);
    }
    return res.map((e) => this.terrainHelper.scoreDifficulty(e)).reduce((a, b) => a + b);
  }
}

module.exports = GameBoard;
