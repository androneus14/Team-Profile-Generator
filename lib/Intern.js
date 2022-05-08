// import the employee constructor
const Employee = require('./Employee');

// intern constructor extending from the employee constructor with an additional property
class Intern extends Employee {
    construtor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;