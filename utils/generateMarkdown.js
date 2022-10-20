// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "None"){
    return `![${license} badge](https://img.shields.io/badge/License-${license}-blue)`
  }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== "None"){
    return `* [License](#license)`
  }
  return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "None"){
    return `## License
    
  This project is licensed by the ${license} license.`
  }
  return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}
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

To install necessary dependencies, run the following command:

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

If you have additional questions, reach me at ${data.email}.  To view more of my work, visit [${data.github}](https://github.com/${data.github}/).

`;
}

module.exports = generateMarkdown;
