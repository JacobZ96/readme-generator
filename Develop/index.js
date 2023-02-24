// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = ({name, email, project, license, dependencies, test, contribute, usage}) =>
``

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
            choices: ['MIT', 'ISC', 'zLib-License', 'Academic-Free-License-v3'],
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
    ])
    .then ((data) => {
         function createReadme() {
            fs.writeFile('README.md', generateMarkdown, (err) => {
            err ? console.log(err) : console.log('Succesfully Created Readme File!')
                })
            }
            createReadme();
    });

