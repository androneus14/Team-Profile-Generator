const Manager = require('../lib/Manager');
const manager = new Manager('Andy', '1', 'andynguyen_3@hotmail.com', '14');

test('test to create Manager object', () => {
    expect(manager.name).toEqual('Andy');
    expect(manager.id).toEqual('1');
    expect(manager.email).toEqual('andynguyen_3@hotmail.com');
    expect(manager.officeNumber).toEqual('14');
});

test('test to see name through getName method', () => {
    expect(manager.getName()).toEqual('Andy');
});

test('test to see id through getId method', () => {
    expect(manager.getId()).toEqual('1');
});

test('test to see email through getEmail method', () => {
    expect(manager.getEmail()).toEqual('andynguyen_3@hotmail.com');
});

test('test to see office number through getOfficeNumber method', () => {
    expect(manager.getOfficeNumber()).toEqual('14');
});

test('test to get role through getRole method', () => {
    expect(manager.getRole()).toEqual("Manager");
});