const Circle = require('./circleChoice');
const Triangle = require('./triangleChoice');
const Square = require('./squareChoice');



function createShape(response) {

    if (response.shape === 'Circle') {
        let userChoice = new Circle (response.text, response.shapeColor, response.textColor)
        return userChoice.render()
    }

    if (response.shape === 'Triangle') {
        let userChoice = new Triangle (response.text, response.shapeColor, response.textColor)
        return userChoice.render()
    }

    if (response.shape === 'Triangle') {
        let userChoice = new Triangle (response.text, response.shapeColor, response.textColor)
        return userChoice.render()
    }
};

module.exports = createShape;