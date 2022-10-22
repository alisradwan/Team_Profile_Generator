const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
  const test = 300;
  const e = new Manager("Ali", 3, "ali@gmail.com", test);
  expect(e.officeNumber).toBe(test);
});

test("Can get office number via getOffice()", () => {
  const test = 300;
  const e = new Manager("Ali", 3, "ali@gmail.com", test);
  expect(e.getOffice()).toBe(test);
});

test('getRole() should return "Manager"', () => {
  const test = "Manager";
  const e = new Manager("Ali", 3, "ali@gmail.com", 300);
  expect(e.getRole()).toBe(test);
});
