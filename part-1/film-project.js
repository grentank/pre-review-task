class FilmProject {
  constructor(args = {}) {
    this.title = args.title;
    this.director = args.director
    this.cast = args.cast
this.castingBudget = args.castingBudget
  }

  remainingBudget() {
    const sum = this.cast.reduce((ac, el) => ac.salary + el.salary)
    const res = this.castingBudget - sum
    return res 
  }

  addActor(actor) {
    this.cast.push(actor)
    if (actor.salary > this.castingBudget) {
    this.cast.pop()
    return false
    }
    return true
  }

  headliners() {
    const res = this.cast.filter((el) => el.popularityRating > 8)
    return res
}
}

module.exports = FilmProject;
