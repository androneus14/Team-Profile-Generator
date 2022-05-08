const Employee = require('../lib/Employee');
const employee = new Employee('Andy', '123456', 'andynguyen_3@hotmail.com')

test('test to see if we can get the values of the employee object', () => {
    expect(employee.name).toEqual('Andy');
    expect(employee.id).toEqual('123456');
    expect(employee.email).toEqual('andynguyen_3@hotmail.com');
});

test('test to see name through getName method', () => {
    expect(employee.getName()).toEqual('Andy');
});

test('test to see id through getId method', () => {
    expect(employee.getId()).toEqual('123456');
});

test('test to see email through getEmail method', () => {
    expect(employee.getEmail()).toEqual('andynguyen_3@hotmail.com');
});

test('test to get role through getRole method', () => {
    expect(employee.getRole()).toEqual("Employee");
});