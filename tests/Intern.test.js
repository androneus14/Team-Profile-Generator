const Intern = require('../lib/Intern');
const intern = new Intern('John', '3', 'john@fakeemail.com', '2University');

test('test to create intern object', () => {
    expect(intern.name).toEqual('John');
    expect(intern.id).toEqual('3');
    expect(intern.email).toEqual('john@fakeemail.com');
    expect(intern.school).toEqual('2University');
});

test('test to see name through getName method', () => {
    expect(intern.getName()).toEqual('John');
});

test('test to see id through getId method', () => {
    expect(intern.getId()).toEqual('3');
});

test('test to see email through getEmail method', () => {
    expect(intern.getEmail()).toEqual('john@fakeemail.com');
});

test('test to see school through getSchool method', () => {
    expect(intern.getSchool()).toEqual('2University');
});

test('test to get role through getRole method', () => {
    expect(intern.getRole()).toEqual("Intern");
});