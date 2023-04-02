class FilmProject {
  constructor(args = {}) {
    this.title = args.title;
    this.director = args.director;
    this.cast = args.cast;
    this.castingBudget = args.castingBudget;
  }

  remainingBudget() {
    const sumOfSalary = this.cast.reduce((a, b) => a.salary + b.salary);
    return this.castingBudget - sumOfSalary;
  }

  addActor(actor) {
   if (actor.salary > this.castingBudget) {
    return false
   }
   return this.cast.push(actor)
  }

  headliners(){
    return this.cast.filter((e) => e.popularityRating > 8)
  }
}

module.exports = FilmProject;
