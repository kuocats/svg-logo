const Shape = require('./shapes.js')

class circleChoice extends Shape {
    constructor (text, shapeColor, textColor){
        super(text, shapeColor, textColor);
    };
    render() {
        return `
        <svg version="1.1"
            width="400" height="300" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="75" r="20"/>
            <<text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    };
};

module.exports = circleChoice;