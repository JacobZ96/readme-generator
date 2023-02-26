// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const badge = require('./utils/generateMarkdown');

const createMarkdown = ({ name, email, project, description, license, dependencies, test, contribute, usage, apps }) =>
`# ${project}

## Description 
${description}

## License 
${license}
${renderLicenseBadge(license)}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribute](#how-to-contribute)
- [Test](#test)
- [Apps Used](#applications-used)

## Installation 
${dependencies}

## Usage 
${usage}


## How to Contribute 
${contribute}

## Test
${test}

## Applications Used
${apps}

## Questions
If you have any questing please contact me at ${email}, and you can find more of my work at https://github.com/${name}. 
`;

inquirer
    .prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is your Github username?',
        },
        {
            type: 'input',
            name: 'email',  
            message: ' What is your email address?',
        },
        {
            type: 'input',
            name: 'project',
            message: 'What is your project name?',
        },
        {
           type: 'input',
           name: 'description',
           message: 'Please provide a short description of you project', 
        },
        {
            type: 'checkbox',
            message : 'What license is your project useing?',
            name: 'license',
            choices: ['MIT', 'ISC', 'zLib-License', 'Mozilla Public License 2.0'],
        },
        {
            type: 'input',
            name: 'dependencies',
            message: 'What command should be run to install dependencies?'
        },
        {
            type: 'input',
            name: 'test',
            message: 'What command should be run to tests?',
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'What does the user need to know about contributing to this project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What shoud the user know about using this repo?',
        },
        {
            type: 'input',
            name: 'apps',
            message: 'What applications did you use for this project?',
        }
    ])
    .then ((data) => {
        const readmeContent = createMarkdown(data)
            fs.writeFile('README.md', readmeContent, (err) => {
            err ? console.log(err) : console.log('Succesfully Created Readme File!')
                })
            }
    );


function renderLicenseBadge(license) {
    switch (license) {
        case 'MIT':
            return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
        case 'ISC':
            return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
        case 'zLib-License':
            return `[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)`
        case 'Mozilla Public License 2.0':
            return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`    
        default:
            return "";
    }
};

