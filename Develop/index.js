// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const createMarkdown = ({ project, description, license, dependencies, test, contribute, usage, apps }) =>
`# ${project}

## Description 
${description}

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
## License 
${license}
## How to Contribute 
${contribute}
## Test
${test}
## Applications Used
${apps}
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

