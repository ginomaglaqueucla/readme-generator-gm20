const fs = require('fs')

// function chooses licenses depending on user selection
const licenseText = licenseUser => {
  let txtPath = "";
  let GNU_AGPLv3 = ["GNU AFFERO GENERAL PUBLIC LICENSE", 
  "Version 3, 19 November 2007","Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>",
  "Everyone is permitted to copy and distribute verbatim copies",
  "of this license document, but changing it is not allowed."];
  // 'GNU AGPLv3','Mozilla Public License','Apache License 2.0',
  //  'MIT License','Boost Software License 1.0','The Unlicense'
  // txtPath = "../src/" + license + ".txt";
  // console.log(txtPath);
  // fs.readFile('../src/GNU AGPLv3.txt', 'utf8' , (err, data) => {
  //   if (err) {
  //     console.error(err)
  //     return
  //   }
  //     return data;
  // });
  return GNU_AGPLv3;
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
${licenseTextString[0]}
${licenseTextString[1]}
${licenseTextString[2]}
${licenseTextString[3]}

## Contribution
${contribution}

## Test
${tests}
`
}