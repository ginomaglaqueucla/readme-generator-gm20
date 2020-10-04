// function to generate markdown for README
module.exports = data => {
  console.log(data);
  const { gitUser,
          email,
          projTitle,
          projDescription,
          installInstruct,
          usageInfo,
          contribution,
          tests
      } = data;

  return `# ${projTitle}

## Description
${projDescription}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation
${installInstruct}

## Usage
${usageInfo}

## License


## Contribution
${contribution}

## Test
${tests}
`
}