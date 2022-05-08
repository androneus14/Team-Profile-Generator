const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Alec', '2', 'alec@fakeemail.com', 'androneus14');

test('test to create Engineer object', () => {
    expect(engineer.name).toEqual('Alec');
    expect(engineer.id).toEqual('2');
    expect(engineer.email).toEqual('alec@fakeemail.com');
    expect(engineer.github).toEqual('androneus14');
});

test('test to see name through getName method', () => {
    expect(engineer.getName()).toEqual('Alec');
});

test('test to see id through getId method', () => {
    expect(engineer.getId()).toEqual('2');
});

test('test to see email through getEmail method', () => {
    expect(engineer.getEmail()).toEqual('alec@fakeemail.com');
});

test('test to see github username through getGithub method', () => {
    expect(engineer.getGithub()).toEqual('androneus14');
});

test('test to get role through getRole method', () => {
    expect(engineer.getRole()).toEqual("Engineer");
});