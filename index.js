const inquirer = require('inquirer');
const generateReadContent = require('./src/readme-template');
const fs = require('fs');
// array of questions for user
const questions = [
    'Enter GitHub username:',
    'Enter email contact:',
    'What is the project title:',
    'Enter project description:',
    'Enter installation instructions:',
    'Enter usage information:',
    'Enter contribution guidelines:',
    'Enter Tests:'
];

// function to write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }
    
            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};


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
      },
      {
        type: 'input',
        name: 'email',
        message: questions[1],
        validate: email => {
          if (email) {
            return true;
          } else {
            console.log('REQUIRED! Enter email!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'projTitle',
        message: questions[2],
        validate: projTitle => {
          if (projTitle) {
            return true;
          } else {
            console.log('REQUIRED! Enter Project Title!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'projDescription',
        message: questions[3],
        validate: projDecription => {
          if (projDecription) {
            return true;
          } else {
            console.log('REQUIRED! Enter Project Description!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'installInstruct',
        message: questions[4],
        validate: installInstruct => {
          if (installInstruct) {
            return true;
          } else {
            console.log('REQUIRED! Enter Install Instructions!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usageInfo',
        message: questions[5],
        validate: usageInfo => {
          if (usageInfo) {
            return true;
          } else {
            console.log('REQUIRED! Enter Usage Information!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'contribution',
        message: questions[6],
        validate: contribution => {
          if (contribution) {
            return true;
          } else {
            console.log('REQUIRED! Enter Contribution Guidelines!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'tests',
        message: questions[7],
        validate: tests => {
          if (tests) {
            return true;
          } else {
            console.log('REQUIRED! Enter Tests!');
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
    })
    .then(createReadFile => {
        return writeToFile(createReadFile);
    });
}

// function call to initialize program
init();
