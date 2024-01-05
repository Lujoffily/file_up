// TODO: Include packages needed for this application
var inquirer = request('inquirer');
var fs = request('fs');

// TODO: Create an array of questions for user input
const questions = [
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of your project?',
            },
            {
                type: 'input',
                name: 'description',
                message: 'What is the description of your project?',
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Is there any installation needed for your project?',
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Give a explanation of how your project workds?',
            },
            {
                type: 'input',
                name: 'credits',
                message: 'Did you collaborate with anyone on this project?',
            },
            {
                type: 'list',
                name: 'license',
                message: 'What liscense would you like to use it?',
                choices: ['Apache License 2.0',
                    'GNU General Public License v3.0',
                    'MIT License',
                    'BSD 2-Clause "simplified" License',
                    'BSD 3-cLAUSE "NEW" or "Revised" License',
                    'Boost Software License 1.0',
                    'Creative Commons Zerro v1.0 Universal',
                    'Eclipse Public License 2.0',
                    'GNU Affero General Public License v3.0',
                    'GNU General Public License v2.0',
                    'GNU Lesser General Public License v2.1',
                    'Mozilla Public License 2.0',
                    'The Unlicense'],
            },
            {
                type: 'confirm',
                name: 'contribution',
                message: 'Would you like other developes to contribute to your project?',
            },
            {
                type: 'input',
                name: 'contribute',
                message: 'How can other developers contribute to your project?',
                when: (answers) => answers.contribution,
            },
            {
                type: 'confirm',
                name: 'test',
                message: 'Did you do any test on you project?',
            },
            {
                type: 'input',
                name: 'solution',
                message: 'How can other developers run those tests here?',
            }
        ])
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
