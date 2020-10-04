// const generateTitle = projectTitle => {
//     console.log(projectTitle);
// }
const generateMarkdown = require('../utils/generateMarkdown.js');
module.exports = templateData => {
    console.log(templateData);
    const { gitUser,
            email,
            projTitle,
            projDescription,
            installInstruct,
            usageInfo,
            contribution,
            tests
        } = templateData;

    return `# ${projTitle}

## Description
${projDescription}

## Table of Contents

## Installation
${installInstruct}

## Usage
${usageInfo}

## Contribution
${contribution}

## Test
${tests}
    `
    
}