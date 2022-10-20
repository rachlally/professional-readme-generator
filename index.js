//Required packages for this application
const fs = require("fs")
const inquirer = require("inquirer")
const path = require("path")
const generateMarkdown = require("./utils/generateMarkdown")

//Arry of questions to prompt user for input
const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your project's title?",
        name: "title"
    },
    {
        type: "input",
        message: "Write a short description of your project:",
        name: "description"
    },
    {
        type: "list",
        message: "What type of license would you like?",
        name: "license", 
        choices: ["MIT", "Apache2.0", "GPL3.0", "BSD3", "None"]
    },
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "What tests are available for your application?",
        name: "tests"
    },
    {
        type: "input",
        message: "What are the guidelines for using this repo?",
        name: "usage"
    },
    {
        type: "input",
        message: "How can a user contribute to the repo?",
        name: "contribution"
    },

];



//This function will write the README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data);
}

//This function will initialize app
function init() {
    inquirer.prompt (questions).then((inquirerResponses)=>{
        console.log("We are generating your README.");
        writeToFile("README.md", generateMarkdown({...inquirerResponses}))
    })
}

// Function call to initialize app
init();
