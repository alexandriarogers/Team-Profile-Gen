const Engineer = require("../lib/engineer");


test("Can set GitHUb account via constructor", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Jane", 9, "jane@gmail.com", testValue);
    expect(e.github).toBe(testValue);
  });
  
  test("getRole() should return Engineer", () => {
    const testValue = "Engineer";
    const e = new Engineer("Jane", 9, "jane@gmail.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
  });
  
  test("Can get GitHub username via getGithub()", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Jane", 9, "jane@gmail.com", testValue);
    expect(e.getGithub()).toBe(testValue);
  });