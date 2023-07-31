const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./library/tests/shapes');

const fs = require ('fs');
const questions = require (`./library/tests/questions.js`);
const fileName = "./examples/logo.svg";
const setShape = require('./library/tests/createShape.js')


function generateLogo(response) {
    const svg = setShape (response);
    fs.writeFile(fileName, svg, ()=> console.log(`Generated logo.svg`));
}

function init(){
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