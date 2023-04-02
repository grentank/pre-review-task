class GameBoard {
  constructor(terrainHelper, terrainList, size) {
    this.terrainHelper = terrainHelper;
    this.terrainList = terrainList;
    this.size = size;
  }

  terrainMap() {
    let result = [];
    for (let i = 0; i < this.terrainList.length; i++) {
      if (this.terrainList[i] === 'P') {
        result.push('plains');
      } else if (this.terrainList[i] === 'W') {
        result.push('water');
      } else if (this.terrainList[i] === 'F') {
        result.push('forest');
      } else if (this.terrainList[i] === 'M') {
        result.push('mountains');
      } else if (this.terrainList[i] === 'L') {
        result.push('lava');
      }
    }
    // const result = this.terrainList.map((el) => {
    // if (el === 'P') {
    //   console.log(el);
    //   el = 'plains';
    //   console.log(el);
    // } else if (el === 'W') {
    //   console.log(el);
    //   el = 'water';
    //   console.log(el);
    // } else if (el === 'F') {
    //   console.log(el);
    //   el = 'forest';
    //   console.log(el);
    // } else if (el === 'M') {
    //   console.log(el);
    //   el = 'mountains';
    //   console.log(el);
    // } else if (el === 'L') {
    //   console.log(el);
    //   el = 'lava';
    //   console.log(el);
    // }
    // не понимаю, почему не получается с map
    // });
    const res = [];
    for (let i = 0; i < result.length; i += this.size) {
      const slice = result.slice(i, i + this.size);
      res.push(slice);
    }
    return res;
  }

  difficultyOfJourney(journey) {
    let result = 0;
    journey.forEach((el) => {
      result += el.reduce((acc, cur) => acc + cur, 0);
    });
    return result;
    // тут больше не понял, что от меня требуется и каким образом из чисел в тесте вообще может получится 225
  }
}

module.exports = GameBoard;
