const Actor = require('./actor');

class FilmProject {
  constructor(args = {}) {
    this.title = args.title;
    this.director = args.director;
    this.cast = args.cast;
    this.castingBudget = args.castingBudget;
    this.salary = args.salary;
  }

  remainingBudget() {
    let result = 0;
    for (let i = 0; i < this.cast.length; i++) {
      result += this.cast[i].getSalary();
    }
    return this.castingBudget - result;
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
