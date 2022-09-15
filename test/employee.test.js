
const Employee = require("../lib/employee");

const employee = new Employee ("Jane", "3000", "jane@gmail.com");

test("Getting the values from the constructor for the employee object", () => {
    expect(employee.name).toBe("Jane");
    expect(employee.id).toBe("3000");
    expect(employee.email).toBe("jane@gmail.com")
});

test("Gets the name from the getName() method", () => {
    expect(employee.getName()).toBe("Jane");
});

test("Gets id from the getId() method", () => {
    expect(employee.getId()).toBe("3000");
})

test("Gets email address from the getEmail() method", () => {
    expect(employee.getEmail()).toBe("jane@gmail.com")
})

test("Gets the role of the new employee from the getRole() method", () => {
    expect(employee.getRole()).toBe("Employee");
})