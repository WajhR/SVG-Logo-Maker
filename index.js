// shape..shape color.. text.. text color
const inqurier = require('inquirer')
const fs = require('fs')
const Shape = require('./lib/shape')
const template = require('./src/template')

inqurier.prompt([
    {
        type: "list",
        name: 'shape',
        message: 'Choose a shape',
        choices: ["circle", "triangle", "square"]
    },
    {
        type: "input",
        name: 'shapeColor',
        message: 'What color would you like the shape to be?',
    },
    {
        type: "input",
        name: 'text',
        message: 'What text would you like to have in your logo?',
    },
    {
        type: "input",
        name: 'textColor',
        message: 'What color would you like the text to be?',
    },
]).then(answers => {
    const shape = new Shape(answers.shape, answers.shapeColor, answers.text, answers.textColor)
    fs.writeFile('logo.html', template(shape), (err) => {
        if (err) throw err;
        console.log("Logo Created!")
    })
})