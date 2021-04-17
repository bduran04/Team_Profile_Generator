var inquirer = require('inquirer');

inquirer.prompt[{
    type: 'input',
    name: 'name',
    message: 'What is your name?'
}, {
    type: 'input',
    name: 'id',
    message: 'What is your employee id?'
}, {
    type: 'list',
    name: 'roleToAdd',
    message: 'What position would you like to add?',
    choices: ['Engineer', 'Intern', 'None'],
}]
