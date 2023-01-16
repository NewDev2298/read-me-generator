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
        name: "description",
        message: "Please add project description.",
        default: "Fun Fact: Meryl Streep has won three Academy Awards. "
    },
    {
        type: "input",
        name: "installation",
        message: "Please add installation information.",
        default: "n/a"
    },
    {
        type: "input",
        name: "usage",
        message: "Add usage information.",
        default: "n/a"
    },
    {
        type: "input",
        name: "contribution",
        message: "Contribution Guidelines.",
        default: "n/a"
    },
    {
        type: "input",
        name: "tests",
        message: "Test Instructions?",
        default: "n/a"

    },
    {
        type: "input",
        name: "github",
        message: "Add your GitHub account here.",
        default: "tiktokdev223"

    },
    {
        type: "input",
        name: "email",
        message: "Add your email here.",
        default: "anakinskywalker@farfaraway.com"
    
    },
    {
        type: "list",
        name: "license",
        message: "Select License Type.",
        default: "MIT",
        choices: ["MIT", "Apache-2.0", "ISC"]
    
    },
];

function writeToFile(fileName, data) {
        fs.writeFileSync(fileName, data)

}

function init() {
    prompt(questions)
    .then((responses) => {
        const result = generateMarkdown(responses);
        writeToFile("./dist/README.md", result)
    })
}

init();
