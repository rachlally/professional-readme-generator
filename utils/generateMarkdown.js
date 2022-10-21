//This is a function that returns a license badge based on which license is passed in
//If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "None"){
    return `![${license} badge](https://img.shields.io/badge/License-${license}-blue)`
  }
  return ''
}

//this is a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== "None"){
    return `* [License](#license)`
  }
  return ''
}

//this is a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "None"){
    return `## License
    
This project is licensed by the ${license} license.`
  }
  return ''
}

//This is a function to generate the markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contribution](#contribution)
* [Tests](#tests)
* [Questions](#questions)

## Installation

To install:

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contribution 

${data.contribution}

## Tests

To test, run the following:

\`\`\`
${data.tests}
\`\`\`

## Questions

If you have questions, you can reach me at ${data.email}.  To view more of my work, visit [${data.github}](https://github.com/${data.github}/).

`;
}

module.exports = generateMarkdown;
