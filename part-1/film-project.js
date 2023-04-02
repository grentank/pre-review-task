class FilmProject {
  constructor(args = {}) {
    this.title = args.title;
    this.director = args.director;
    this.cast = args.cast;
    this.castingBudget = args.castingBudget;
  }

  remainingBudget() {
    const totalSalary = this.cast.reduce((acc, actor) => acc + actor.salary, 0);
    const remainingBudget = this.castingBudget - totalSalary;
    return remainingBudget;
  }

  addActor(newActor) {
    if (newActor.salary > this.castingBudget) {
      return false;
    }
    this.cast.push(newActor);
    return true;
  }

  headliners() {
    return this.cast.filter((element) => element.popularityRating > 8);
  }
}

module.exports = FilmProject;
