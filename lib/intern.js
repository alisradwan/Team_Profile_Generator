const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, School) {
    super(name, id, email);
    this.role = "Intern";
    this.School = School;
  }

  getSchool() {
    return this.School;
  }
}

module.exports = Intern;
