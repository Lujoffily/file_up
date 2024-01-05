// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
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
                    'BSD 3-Clause "NEW" or "Revised" License',
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
            },
            {
                type: 'input',
                name: 'Github',
                message: 'What is your Github username?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is a good email that other developers can email you with questions on your projects?'
            }
        ])
}

// TODO: Create a function to write README file
function writeToFile(title, description, installation, usage, credits, license, contribute, solution, Github, email) {
    const readMeContent =
`# ${title}

## Description

${description}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${installation}

## Usage

${usage}

## Credits

${credits}

## License

${badge}\b
${license}

---

## How to Contribute

${contribute}

Contact me with sugestions

Github: ${Github}
Email: ${email}

## Tests

${solution}`
;
fs.writeFileSync('README.md', readMeContent);
}

// TODO: Create a function to initialize app
function init() { 
    questions()
    .then(() => console.log('ReadMe.md file created successfully'))
    .catch((error) => console.log(error));
}

// Function call to initialize app
init();
