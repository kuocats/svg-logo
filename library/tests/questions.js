const colorSelections = require('./colorKeywords.js')

const questions = [
    {
        name: 'shape',
        message: 'What is the shape of your logo?',
        type: 'list',
        choices: ['Triangle','Circle','Square'],
    },

    {
        name: 'shapeColorSelection',
        message: 'What is the color of your logo shape? Choose a format:',
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
            let answerLowercase = answer.toLowercase();
            for (var i=0, len = colorKeywords.length; i < len; ++i) {
                if (answerLowercase.indexOf(colorKeyword[i]) != -1){
                    return true;
                }}
            return console.log("/n Please Enter A Valid Keyword Color")
        }
    },

    {
        name: 'text',
        message: 'What is Logo Text? (Up to 3 Letters Only)',
        type: 'input',
        validate: (answer) => {
            if (answer.length >3) {
                return console.log("/n Text up to three letters only! Try Again!");
                }
            return true;
        }
    },

    {
        name: `textColorSelection`,
        message: `What is the color of your logo text?`,
        type: `list`,
        choices: ['hexadecimal', 'color keyword']
    },

    {
        type: "input",
        name: "textColor",
        message: "Enter Text Color Keyword",
        when: (answer) => {
            if (answers.textColorChoice === `color keyword`) {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            let answerLowercase = answer.toLowerCase();
            for (var i = 0, len = colorKeywords.length; i < len; ++i) {
                if (answerLowercase.indexOf(colorKeywords[i]) != -1) {
                    return true;
                }}
                return console.log("\n Please Enter Color Keyword")
            }
        },

        {
            type: "input",
            name: "textColor",
            message: "Enter the hexadecimal number (#CCCCCC)",
            when: (answers) => {
                if (answers.textColorChoice === `hexadecimal`) {
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