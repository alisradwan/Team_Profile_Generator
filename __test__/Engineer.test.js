const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const test = "alisradwan";
  const e = new Engineer("Ali", 300, "ali@gmail.com", test);
  expect(e.github).toBe(test);
});

test("Can get GitHub username via getGithub()", () => {
  const test = "alisradwan";
  const e = new Engineer("Ali", 300, "ali@gmail.com", test);
  expect(e.getGithub()).toBe(test);
});

test('getRole() should return "Engineer"', () => {
  const test = "Engineer";
  const e = new Engineer("Ali", 300, "ali@gmail.com", "Alisradwan");
  expect(e.getRole()).toBe(test);
});
