const Employee = require("./Employee");

class Manger extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.role = "Manger";
    this.officeNumber = officeNumber;
  }

  getOffice() {
    return this.officeNumber;
  }
}

module.exports = Manger;
