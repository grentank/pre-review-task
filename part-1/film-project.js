class FilmProject {
  constructor(args = {}) {
    this.title = args.title;
    this.director = args.director;
    this.cast = args.cast;
    this.castingBudget = args.castingBudget;
  }

  remainingBudget() {
    let result = this.castingBudget;
    this.cast.forEach((el) => {
      result -= el.salary;
    });
    return result;
  }

  addActor(actor) {
    if (actor.salary <= this.castingBudget) {
      this.cast.push(actor);
      return true;
    } else {
      return false;
    }
  }

  headliners() {
    let result = [];
    this.cast.forEach((element) => {
      if (element.popularityRating > 8) {
        result.push(element);
      }
    });
    return result;
  }
}

module.exports = FilmProject;
