const inquirer = require('inquirer');
const fs = require('fs');
const SVG = require('./lib/svg');
const {Shape, Square, Circle, Triangle}= require('./lib/shapes');


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

function writeToFile(fileName, answers) {
    fs.writeFile(fileName, answers, () => console.log('Generated logo.svg!'))
}

function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const svg = new SVG();
            svg.setText(answers.logoText, answers.logoTextColor)
            const shape = eval(`new ${answers.logoShape}()`)
            shape.setColor(answers.logoShapeColor)
            svg.setShape(shape)
            writeToFile('./examples/logo.svg', svg.render())
        })
}
init()