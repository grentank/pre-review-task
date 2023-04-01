class FilmProject {
  constructor(args = {}) {
    this.title = args.title;
    this.director = args.director;
    this.cast = args.cast;
    this.castingBudget = args.castingBudget;
  }

  remainingBudget() {
    return this.cast.reduce((acum, elem) => acum - elem.salary, this.castingBudget);
  }

  addActor(actor) {
    return actor.salary <= this.castingBudget ? this.cast.push(actor) : undefined;
  }

  headliners() {
    return this.cast.filter((elem) => elem.popularityRating > 8);
  }
}

module.exports = FilmProject;
