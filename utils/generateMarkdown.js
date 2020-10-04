const fs = require('fs')

// function chooses licenses depending on user selection
const licenseText = license => {
  let txtPath = "";
  // 'GNU AGPLv3','Mozilla Public License','Apache License 2.0',
  //  'MIT License','Boost Software License 1.0','The Unlicense'
  txtPath = "../src/" + license + ".txt";
  console.log(txtPath);
  fs.readFile(txtPath, 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
      return data;
  });
}



// function to generate markdown for README
module.exports = READMEdata => {
  console.log(READMEdata);
  const { gitUser,
          email,
          projTitle,
          projDescription,
          installInstruct,
          usageInfo,
          license,
          contribution,
          tests
      } = READMEdata;

  const licenseTextString = licenseText(license);

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
${licenseTextString}

## Contribution
${contribution}

## Test
${tests}
`
}