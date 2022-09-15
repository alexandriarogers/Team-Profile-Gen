const Intern = require("../lib/intern");

test("Can set school via constructor", () => {
  const testValue = "Georgia Tech";
  const i = new Intern("Pass", 9, "jane@gmail.com", testValue);
  expect(i.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const i = new Intern("Pass", 9, "jane@gmail.com", "Georgia Tech");
  expect(i.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UCLA";
  const i = new Intern("Pass", 9, "jane@gmail.com", testValue);
  expect(i.getSchool()).toBe(testValue);
});