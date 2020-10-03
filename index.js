const inquirer = require('inquirer');
const generateReadContent = require('./src/readme-template');
// array of questions for user
const questions = [
    'Enter GitHub username:',
    'Enter email contact:',
    'What is the project title:',
    'Enter project description:',
    'Enter installation instructions:',
    'Enter usuage information:',
    'Enter contribution guidelines:',
    'Enter Tests:'
];

// function to write README file
function writeToFile(fileName, data) {
}

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'gitUser',
        message: questions[0],
        validate: gitUser => {
          if (gitUser) {
            return true;
          } else {
            console.log('REQUIRED! Enter GitHub username!');
            return false;
          }
        }
      }
    ]);
}

// function to initialize program
function init() {
    promptUser()
    .then(readmeData => { 
        return generateReadContent(readmeData);
    });
}

// function call to initialize program
init();
