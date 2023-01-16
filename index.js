const inquirer = require("inquirer");
const fs = require("fs");
const prompt = inquirer.createPromptModule();
const generateMarkdown = require("./utils/generateMarkdown")

const questions = [
    {
        type: "input",
        name: "title",
        message: "Please provide a project title."
    },
    {
        type: "input",
        name: "Description",
        message: "Please add project description."
    },
    {
        type: "input",
        name: "Installation",
        message: "Please add installation information."
    },
    {
        type: "input",
        name: "Usage Information",
        message: "Add usage information."
    },
    {
        type: "input",
        name: "Contribution Guidelines",
        message: "Contribution Guidelines."
    },
    {
        type: "input",
        name: "Test Instructions",
        message: "Test Instructions?"
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
