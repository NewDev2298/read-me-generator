const inquirer = require("inquirer");
const fs = require("fs");
const prompt = inquirer.createPromptModule();
const generateMarkdown = require("./utils/generateMarkdown")

const questions = [
    {
        type: "input",
        name: "title",
        message: "Please provide a project title.",
        default: "Title Goes Here"
    },
    {
        type: "input",
        name: "Description",
        message: "Please add project description.",
        default: "Fun Fact: Meryl Streep has won three Academy Awards. "
    },
    {
        type: "input",
        name: "Installation",
        message: "Please add installation information.",
        default: ""
    },
    {
        type: "input",
        name: "Usage Information",
        message: "Add usage information.",
        default: ""
    },
    {
        type: "input",
        name: "Contribution Guidelines",
        message: "Contribution Guidelines.",
        default: ""
    },
    {
        type: "input",
        name: "Test Instructions",
        message: "Test Instructions?",
        default: ""

    },
    {
        type: "input",
        name: "GitHub",
        message: "Add your GitHub account here.",
        default: "tiktokdev223"

    },
    {
        type: "input",
        name: "Email",
        message: "Add your email here.",
        default: "anakinskywalker@farfaraway.com"

    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
        fs.writeFileSync(fileName, data)

}

// TODO: Create a function to initialize app
function init() {
    prompt(questions)
    .then((responses) => {
        const result = generateMarkdown(responses);
        writeToFile("./dist/README.md", result)
    })
}

// Function call to initialize app
init();
