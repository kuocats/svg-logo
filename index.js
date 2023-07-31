const inquirer = require('inquirer');
const questions = require (`./library/tests/questions.js`);
const fs = require ('fs');
const fileName = "./examples/logo.svg";
const createShape = require('./library/tests/createShape.js')


function generateLogo(response) {
    const svg = createShape (response);
    fs.writeFile(fileName, svg, ()=> console.log(`Generated logo.svg`));
}

function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        generateLogo(response);
        })
    .catch(err => {
            console.log(err)
         });
}

init();