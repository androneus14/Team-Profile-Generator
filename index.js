const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML')
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "teamprofile.html");



const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const teamMembers = [];


const addManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "Enter the manager's name.", 
        },
        {   type: 'input',
            name: 'managerId',
            message: "Enter the manager's employee ID number.",
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "Enter the manager's email address.",
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: "Enter the manager's office number.",
        },
    ]).then(managerAnswers => {
        const {managerName, managerId, managerEmail, managerOfficeNumber} = managerAnswers;
        const manager = new Manager (managerName, managerId, managerEmail, managerOfficeNumber);

        teamMembers.push(manager);
    });
};

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
    });
};

const createTeam = () => {
    fs.writeFileSync(outputPath, generateHTML(teamMembers));
}

addManager();

