class Actor {
  constructor(args = {}) {
    this.name = args.name || 'Сергей Безруков';
    this.popularityRating = args.popularityRating || 0;
    this.salary = args.salary || 0;
  }

  getSalary() {
    return this.salary;
  }
}

module.exports = Actor;
