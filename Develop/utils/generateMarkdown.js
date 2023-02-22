// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge;

  switch(license) {
    case "Apache":
      badge = "https://img.shields.io/badge/License-Apache_2.0-blue.svg";
      break;
    case "BSD-2":
      badge = "https://img.shields.io/badge/License-BSD_2--Clause-orange.svg";
      break;
    case "BSD-3":
      badge = "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg";
      break;
    case "Boost":
      badge = "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg";
      break;
    default:
      badge = "";
      break;
  }

return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;

  switch(license) {
    case "Apache":
      licenseLink = "https://opensource.org/licenses/Apache-2.0";
      break;
    case "BSD-2":
      licenseLink = "https://opensource.org/licenses/BSD-2-Clause";
      break;
    case "BSD-3":
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "Boost":
      licenseLink = "https://www.boost.org/LICENSE_1_0.txt";
      break;
    default:
      licenseLink = "";
      break;
  }

return licenseLink;

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseLink;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const sections = ["Title", "Descriptor", "Usage", "Installation", "Test"]
  console.log(data);
    let licenseLink = renderLicenseLink(data.license);
  return `# ${data.title}\n
  ## Description\n 
  ${data.description}\n
  ## Installation\n 
  ${data.installation}\n
  ## Usage\n 
  ${data.usage}\n
  ## Credits\n 
  ${data.credits}(${data.username})\n
  ## Test\n 
  ${data.test}\n
  ## License\n 
  ${data.license}\n
  ## Badges\n 
  [${data.badges}](${licenseLink})\n 


`;
}

module.exports = generateMarkdown;
