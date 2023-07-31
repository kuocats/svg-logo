const Shape = require('./shapes.js')

class circleChoice extends Shape {
    constructor(text, shapeColor, textColor) {
        super(text, shapeColor, textColor);
    };
    render() {
        return `
        <svg version="1.1"
            width="300" height="200" 
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill=${this.shapeColor} />
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    };
};

module.exports = circleChoice;