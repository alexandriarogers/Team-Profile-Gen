const Manager = require("../lib/manager");

test("Can set office number via constructor argument", () => {
  const testValue = 3000;
  const m = new Manager("Pass", 9, "jane@gmail.com", testValue);
  expect(m.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const m = new Manager("Pass", 9, "jane@gmail.com", 3000);
  expect(m.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const m = new Manager("Pass", 9, "jane@gmail.com", testValue);
  expect(m.getOfficeNumber()).toBe(testValue);
});