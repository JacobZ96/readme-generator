// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseArr = ['MIT', 'ISC', 'zLib-License', 'Mozilla Public License 2.0']

function renderLicenseBadge(license) {
  if (license === licenseArr[0]) {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license === licenseArr[1]){
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
  } else if (license === licenseArr[2]){
    return '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)'
  } else if (license === license[3]){
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  }
}
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {}
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {}
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}

    `;
  }

module.exports = generateMarkdown;

