const inquirer = require('inquirer');
const fs = require('fs');
const generateTeam = require('./src/generateHTML');
const path = require("path");
const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "team.html");

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const teamMembers = [];

const promptManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "Enter your name.",
        },
        {
            type: 'input',
            name: 'managerId',
            message: "Enter your employee ID.",
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "Enter your email address.",
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: "Enter your office number.",
        },
    ]).then(managerAnswers => {
        const {managerName, managerId, managerEmail, managerOfficeNumber} = managerAnswers;
        const manager = new Manager (managerName, managerId, managerEmail, managerOfficeNumber);

        teamMembers.push(manager);
        buildTeam();
    })
}

const buildTeam = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'addEmployee',
            message: "What employee role would you like to add to your team?",
            choices: ['Engineer', 'Intern', 'No more']
        }
    ]).then(function (userInput) {
        switch(userInput.addEmployee) {
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            default:
                createHTML();
        }
    })
}

const addEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "Enter the engineer's name.",
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "Enter the engineer's employee ID number.",
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "Enter the engineer's email address."
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "Enter the engineer's Github username."
        },
    ]).then(engineerAnswers => {
        const {engineerName, engineerId, engineerEmail, engineerGithub} = engineerAnswers;
        const engineer = new Engineer (engineerName, engineerId, engineerEmail, engineerGithub);
        
        teamMembers.push(engineer);
        buildTeam();
    });
};

const addIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "Enter the intern's name.",
        },
        {
            type: 'input',
            name: 'internId',
            message: "Enter the intern's employee ID number.",
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "Enter the intern's email address.",
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "Enter the intern's school they are currently attending.",
        },
    ]).then(internAnswers => {
        const {internName, internId, internEmail, internSchool} = internAnswers;
        const intern = new Intern (internName, internId, internEmail, internSchool);

        teamMembers.push(intern)
        buildTeam();
    });
};

const createHTML = () => {
    console.log("Initial Team Profile created!")
    fs.writeFileSync(distPath, generateTeam(teamMembers), "utf-8");
}

promptManager();