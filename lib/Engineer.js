// import the employee constructor
const Employee = require('./Employee');

// intern constructor extending from the employee constructor with an additional property
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;