const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        name: "text",
        message: "Please enter text that is no more than 3 letters",
        type: 'input'
    },
    {
        name: "text-color",
        message: "Enter a color keyword for the text (or a hexidecimal number)",
        type: 'input'
    },
    {
        name: "shape",
        message: "Please enter the desired shape",
        type: 'list',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        name: "shape-color",
        message: "Enter a color keyword for the shape (or a hexidecimal number)",
        type: 'input'
    }
])
.then()
