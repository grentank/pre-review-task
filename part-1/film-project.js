const Actor = require('./actor');

class FilmProject {
  constructor(args = {}) {
    this.title = args.title;
    this.director = args.director;
    this.cast = args.cast;
    this.castingBudget = args.castingBudget;
  }

  remainingBudget() {
    const x = this.cast.reduce((acc, el) => acc + el.salary, 0);
    return this.castingBudget - x;
  }

  addActor(actor) {
   if(actor.salary > this.castingBudget){
   return false
    
  }
  this.cast.push(actor)
  return true
}

headliners(){
  return this.cast.filter((el)=> el.popularityRating > 8)
}
}
module.exports = FilmProject;

const actr = new FilmProject({
  cast: '123',
});
console.log(actr);
