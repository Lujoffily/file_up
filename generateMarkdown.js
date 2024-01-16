// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  const licenseBadgeUrl = {
    'Apache License 2.0': 'https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0',
    'GNU General Public License v3.0': 'https://img.shields.io/badge/License-GPLv3-blue.svg',
    'MIT License': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'BSD 2-Clause "simplified" License': 'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg',
    'BSD 3-Clause "NEW" or "Revised" License': 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg',
    'Boost Software License 1.0': 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg',
    'Creative Commons Zerro v1.0 Universal': 'https://licensebuttons.net/l/zero/1.0/80x15.png',
    'Eclipse Public License 2.0': 'https://img.shields.io/badge/License-EPL%202.0-red.svg',
    'GNU Affero General Public License v3.0': 'https://img.shields.io/badge/License-AGPL_v3-blue.svg',
    'GNU General Public License v2.0': 'https://img.shields.io/badge/License-GPL_v2-blue.svg',
    'GNU Lesser General Public License v2.1': 'https://img.shields.io/badge/License-LGPL%20v2-blue.svg',
    'Mozilla Public License 2.0': 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg',
    'The Unlicense': 'https://img.shields.io/badge/license-Unlicense-blue.svg'
  }
  
  if (licenseBadgeUrl.hasOwnProperty(license)){
    return licenseBadgeUrl[license];
  } else {
    return
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
