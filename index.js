const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const generateHTML = require('./src/page_template');

const employees = [];

const questions = [{
    type: 'input',
    name: 'name',
    message: 'What is your name?'
}, {
    type: 'input',
    name: 'id',
    message: 'What is your employee id?'
}, {
    type: 'input',
    name: 'email',
    message: 'What is your work email?'
}, {
    type: 'input',
    name: 'officeNumber',
    message: 'What is your office number?'
}, {
    type: 'list',
    name: 'roleToAdd',
    message: 'What position would you like to add?',
    choices: ['Engineer', 'Intern', 'None'],
}];
function engineerQuestions() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is your name?'
        }, {
            type: 'input',
            name: 'engineerId',
            message: 'What is your employee id?'
        }, {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is your work email?'
        }, {
            type: 'input',
            name: 'github',
            message: 'What is your github username?'
        }, {
            type: 'list',
            name: 'anotherRoleToAdd',
            message: 'Would you like to add another member?',
            choices: ['Engineer', 'Intern', 'None'],
        }
    ])

        .then((answer) => {
        const engineer = new Engineer(answer.engineerName, answer.engineerId, answer.engineerEmail, answer.github);
        employees.push(engineer);
        if (answer.anotherRoleToAdd === 'Engineer') {
            engineerQuestions()
        }
        else if (answer.anotherRoleToAdd === 'Intern') {
            internQuestions()
        }
        else {
            writeTheFile('index.html', generateHTML(employees))
        }
    });
}

function internQuestions() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is your name?'
        }, {
            type: 'input',
            name: 'internId',
            message: 'What is your employee id?'
        }, {
            type: 'input',
            name: 'internEmail',
            message: 'What is your work email?'
        }, {
            type: 'input',
            name: 'school',
            message: 'What school are you attending?'
        }, {
            type: 'list',
            name: 'anotherRoleToAdd2',
            message: 'Would you like to add another member?',
            choices: ['Engineer', 'Intern', 'None'],
        }
    ])
        .then((answer) => {
        const intern = new Intern(answer.internName, answer.internId, answer.internEmail, answer.school);
        employees.push(intern);
        if (answer.anotherRoleToAdd === 'Engineer') {
            engineerQuestions()
        }
        else if (answer.anotherRoleToAdd === 'Intern') {
            internQuestions()
        }
        else {
            writeTheFile('index.html', generateHTML(employees))
        }
    });
}
function writeTheFile(fileName, data) {
    fs.writeFile((`./${fileName.data}`).then(() => {
        if (err) {
            return console.error(err)
        }
        else {
            console.log("success!");
        }
    }))
}

function init() {
    inquirer.prompt(questions).then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        employees.push(manager);
        switch (answers.roleToAdd) {
            case "Engineer":
                engineerQuestions()
                break;
            case "Intern":
                internQuestions()
                break;
            default:
                writeTheFile("index.html", generateHTML(employees))
        }
    })
};
init();

