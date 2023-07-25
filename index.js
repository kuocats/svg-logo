const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./lib/shapes");

const fs = require ("fs");
const questions = require (`./library/tests/questions.js`);
const fileName =
const setShape = 


function generateLogo(response) {
    const svg = setShape (response);
    fs.writeFile(fileName, svg, ()=> console.log(`Generated logo.svg`));
}

function init(){
    inquirer
    .prompt(questions)
    .then((response) => {
        createLogo(response);
        })
    .catch(err => {
        console.log(err)
    });
}

init();