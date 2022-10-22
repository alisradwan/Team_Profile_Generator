const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const test = "UCLA";
  const e = new Intern("Ali", 300, "ali@gmail.com", test);
  expect(e.School).toBe(test);
});

test("Can get school via getSchool()", () => {
  const test = "UCLA";
  const e = new Intern("Ali", 300, "ali@gmail.com", test);
  expect(e.getSchool()).toBe(test);
});

test('getRole() should return "Intern"', () => {
  const test = "Intern";
  const e = new Intern("Ali", 300, "ali@gmail.com", "UCLA");
  expect(e.getRole()).toBe(test);
});
