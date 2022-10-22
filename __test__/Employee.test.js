const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof e).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "ali";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const testValue = 300;
  const e = new Employee("Ali", testValue);
  expect(e.id).toBe(testValue);
});

test("Can set email via constructor arguments", () => {
  const email = "ali@gmail.com";
  const e = new Employee("ALi", 2, email);
  expect(e.email).toBe(email);
});

test("Can get name via getName()", () => {
  const getname = "Ali";
  const e = new Employee(getname);
  expect(e.getName()).toBe(getname);
});

test("Can get id via getId()", () => {
  const getid = 300;
  const e = new Employee("Ali", getid);
  expect(e.getId()).toBe(getid);
});

test("Can get email via getEmail()", () => {
  const getemail = "ali@gmail.com";
  const e = new Employee("Ali", 300, getemail);
  expect(e.getEmail()).toBe(getemail);
});

test('getRole() should return "Employee"', () => {
  const test = "Employee";
  const e = new Employee("Ali", 300, "ali@gmail.com");
  expect(e.getRole()).toBe(test);
});
