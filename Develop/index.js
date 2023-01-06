// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

const licenses = ['None', 'Apache', 'BSD-2', 'BSD-3', 'Boost']

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Type the title of the project'
    },
    {
        type: 'input',
        name: 'descriptor',
        message: 'Type a descriptor of the project'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Type out how to use this'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Type out the installation instructions'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Type out the test instructions'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Type out project license:',
        choices: licenses
    },
    {
        type: 'input',
        name: 'username',
        message: 'Type your github username:',
        
    },
    {
        type: 'input',
        name: 'email',
        message: 'Type your e-mail address'
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    const filename = "./dist/README.md";

    fs.writeFile(filename, data, function (err) {
    err ? console.log(err) : console.log(filename + "created!")
});
}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
    .then (answers => {
        console.log(answers);
        writeToFile(generateMarkdown(answers))})
}

// Function call to initialize app
init();
