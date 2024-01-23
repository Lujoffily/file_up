// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

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
                type: 'confirm',
                name: 'installation',
                message: 'Is there any installation needed for your project?',
            },
            {
                type: 'input',
                name: 'instal',
                message: 'How can users install the application?',
                when: (answers) => answers.installation,
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Give a explanation of how your project works?',
            },
            {
                type: 'confirm',
                name: 'credits',
                message: 'Did you collaborate with anyone on this project?',
            },
            {
                type: 'input',
                name: 'collaboratores',
                message: 'What is the Github username for the person/people that collaborated on this project?',
                when: (answers) => answers.credits,
            },
            {
                type: 'list',
                name: 'license',
                message: 'What liscense would you like to use it?',
                choices: ['ApacheLicense2.0',
                    'GNU3',
                    'MIT',
                    'BSD2',
                    'BSD3',
                    'Boost',
                    'GNU2',
                    'GNU2.1',
                    'Mozilla2',
                    'Unlicense'
                ],
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
                when: (answers) => answers.test,
            },
            {
                type: 'input',
                name: 'Github',
                message: 'What is your Github username?'
            },
            {
                type: 'input',
                name: 'GithubURL',
                message: `What's the link for your github?`
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is a good email that other developers can email you with questions on your projects?'
            }
        ])
}

function renderLicenseBadge(license) {
    return `![license](https://img.shields.io/badge/License-${license}-blue.svg)`
}

// TODO: Create a function to write README file
function writeToFile(answers) {

    const readMeContent =
`
${renderLicenseBadge(answers.license)}
# ${answers.title} 

## Description

${answers.description}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${answers.instal}

## Usage

${answers.usage}

## Credits

${answers.collaboratores}

## License

${answers.license} license is the license being used for this project.

---

## How to Contribute

${answers.contribute}

Contact me with sugestions

${answers.Github} [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](${answers.GithubUrl})
Email: ${answers.email}

## Tests

${answers.solution}`
;
fs.writeFileSync('README.md', readMeContent);
console.log('ReadMe.md file created successfully');
}

// TODO: Create a function to initialize app
function init() { 
    questions()
    .then((answers) => {
        writeToFile(answers);
    })
    .catch((error) => console.log(error));
}

// Function call to initialize app
init();
