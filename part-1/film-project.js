class FilmProject {
  constructor(args = {}) {
    // eslint-disable-next-line no-unused-expressions, no-sequences
    (this.title = args.title),
      (this.director = args.director),
      (this.cast = args.cast),
      (this.castingBudget = args.castingBudget);
  }

  // eslint-disable-next-line consistent-return
  remainingBudget() {
    // eslint-disable-next-line no-unreachable-loop
    let budget = this.castingBudget;
    for (let i = 0; i < this.cast.length; i += 1) {
      budget -= this.cast[i].salary;
    }
    return budget;
  }

  addActor(name) {
    if (name.salary <= this.castingBudget) {
      this.cast.push(name);
      return true;
    }
    return false;
  }

  headliners() {
    return this.cast.filter((el) => el.popularityRating > 8);
  }
}

module.exports = FilmProject;
