#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const sleep = ()=>{
    return new Promise((res)=>{
        setTimeout(res,2000)
    })
}

async function welcome(){
    let rainbow = chalkAnimation.rainbow('Let Start Calculation');
    await sleep();
    rainbow.stop(); // use to stop rainbow function after 2 second
    console.log(`     _____________________
    |  _________________  |
    | |              0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|
    `);
}
await welcome();

async function askQuestion(){
    const answers = await inquirer.prompt([             //values which come from the prompt comes as an object
        {
        type: "list", // give user multiple option to choose from
        name:"operator",  // store your choice in operator variable
        message:"Which operation you want to perform? \n",
        choices:["Addition","Subtraction","Multiplication","Division"]
        },
        {
            type:"number", // take input from the user
            name:"num1",   // store value in num1 variable
            message:"Enter first value: "
        },
        {
            type:"number",
            name:"num2",    // store value in num2 variable
            message:"Enter second value: "
        }
    ]);
    //.then((answers)=>{
        //console.log(answers);             //  will return object
        switch(answers.operator){
            case 'Addition':
                console.log(chalk.green(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
                break;
            case 'Subtraction':
                console.log(chalk.green(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
                break;
            case 'Multiplication':
                console.log(chalk.green(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`));
                break;
            case 'Division':
                console.log(chalk.green(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
                break;
        }
   // })
};
//askQuestion();

async function startAgain(){
    do{
        await askQuestion();
        var again = await inquirer
        .prompt({
            type:"input",
            name:"restart",
            message:"Do you want to  continue? Press y or n:"

    })
    }while(again.restart == 'y' || again.restart == 'Y' || again.restart == 'yes' || again.restart == 'YES');
}

startAgain();