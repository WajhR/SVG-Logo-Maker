// shape..shape color.. text.. text color
const inquirer = require('inquirer')
const fs = require('fs')
const {Triangle, Circle, Square} = require('./lib/shape')
const LogoSVG = require('./utils/SVG')

inquirer.prompt([
    {
        type: "list",
        name: 'userShape',
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
    let shape;
    if (answers.userShape === "circle") {
        shape = new Circle()
    } else if(answers.userShape === "triangle") {
        shape = new Triangle()
    } else {
        shape = new Square()
    }

    shape.setColor(answers.shapeColor);

    let svg = new LogoSVG();
    svg.putShape(shape)
    svg.putText(answers.textColor, answers.text)


    return fs.writeFile('logo.svg', svg.render(), (err) =>
    
    {
        if (err) throw err;
        console.log("Logo Created!")
    })
})
