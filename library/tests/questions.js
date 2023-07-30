const colorChoices = require('./colorChoices')

const questions = [
    {
        name: 'shape',
        message: 'What is the shape of your logo?',
        type: 'list',
        choices: ['Triangle','Circle','Square'],
    },

    {
        name: 'shapeColorSelection',
        message: 'What is the color format of your logo shape?',
        type: 'list',
        choices: ['hexadecimal', 'color keyword']       
    },

    {
        name: "shapeColor",
        type: "input",
        message: "Enter Shape Color Keyword",
        when: (answers) => {
            if(answers.shapeColorSelection === 'color keyword') {
                return true;
            }
            return false;
        },

        validate: (answer) => {
            let answerLowercase = answer.toLowerCase();
            for (var i=0, len = colorChoices.length; i < len; ++i) {
                if (answerLowercase.indexOf(colorChoices[i]) != -1){
                    return true;
                }}
            return console.log(" Please Enter A Valid Keyword Color")
        }
    },

    {
        type: "input",
        name: "shapeColor",
        message: "Enter the hexadecimal number of the shape (#CCCC)",
        when: (answer) => {
            if (answers.shapeColorChoice === 'hexadecimal') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            const hexRegEx ='^#[A-Fa-f0-9]{6}$'
            if (!answer.match(hexRegEx)) {
                return console.log("\n Please Enter A Valid Hexadecimal")
            }
            return true;
        }
    },

    {
        name: 'text',
        message: 'What is Logo Text? (Up to 3 Letters Only)',
        type: 'input',
        validate: (answer) => {
            if (answer.length > 3) {
                return console.log("/n Text up to three letters only! Try Again!");
                }
            return true;
        }
    },

    {
        name: `logoColorSelection`,
        message: `What is the color of your logo text?`,
        type: `list`,
        choices: ['hexadecimal', 'color keyword']
    },

    {
        type: "input",
        name: "logoColor",
        message: "Enter Text Color Keyword",
        when: (answer) => {
            if (answers.logoColorSelection === `color keyword`) {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            let answerLowercase = answer.toLowerCase();
            for (var i = 0, len = colorChoices.length; i < len; ++i) {
                if (answerLowercase.indexOf(colorChoices[i]) != -1) {
                    return true;
                }}
                return console.log("\n Please Enter Color Keyword")
            }
        },

        {
            type: "input",
            name: "logoColor",
            message: "Enter the hexadecimal number (#CCCCCC)",
            when: (answers) => {
                if (answers.logoColorSelection === `hexadecimal`) {
                    return true;
                }
                return false;
            },
            validate: (answer) => {
                const hexRegEx = `^#[A-Fa-f0-9]{6}$`
                if (!answer.match(hexRegEx)) {
                    return console.log("\n Enter a Valid Hexadecimal")
                }
                return true;
            }
        },
];

module.exports = questions;