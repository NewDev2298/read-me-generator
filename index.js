const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown ");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please provide a project title"
    },
    {
        type: "input",
        name: "Description",
        message: "Please provide a project title"
    },
    {
        type: "input",
        name: "Installation",
        message: "Please provide a project title"
    },
    {
        type: "input",
        name: "Usage Information",
        message: "Please provide a project title"
    },
    {
        type: "input",
        name: "Contribution Guidelines",
        message: "Please provide a project title"
    },
    {
        type: "input",
        name: "Test Instructions",
        message: "Please provide a project title"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
