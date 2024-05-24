#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
const choices = ['rock', 'paper', 'scissors'];
function getRandomChoices() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return chalk.greenBright.bold('Its a tie!');
    }
    else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')) {
        return chalk.yellowBright.bold('You Win!');
    }
    else {
        return chalk.redBright.bold('You Lose!');
    }
}
async function playGame() {
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'playerChoice',
            message: chalk.red.bold('Choose tock, paper, or scissors:'),
            choices: choices,
        }
    ]);
    const playerChoice = answers.playerChoice;
    const computerChoice = getRandomChoices();
    console.log(chalk.yellowBright.bold(`You chose: ${playerChoice}`));
    console.log(chalk.blueBright.bold(`The computer chose: ${computerChoice}`));
    const result = determineWinner(playerChoice, computerChoice);
    console.log(result);
}
playGame();
