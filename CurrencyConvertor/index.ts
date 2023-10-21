#!/usr/bin/env node

import inquirer from "inquirer";

let Converstion = {
    "GBP": {
        "GBP": 1.0000,
        "USD": 1.2200,
        "EUR": 1.1500,
        "AUD": 1.9397,
        "PKR": 358.6500
    },
    "EUR": {
        "GBP": 0.8634,
        "USD": 1.1012,
        "EUR": 1.0000,
        "AUD": 1.6753,
        "PKR": 310.2200
    },
    "USD": {
        "GBP": 0.7842,
        "USD": 1.0000,
        "EUR": 0.9081,
        "AUD": 1.5216,
        "PKR": 281.3400
    },
    "AUD": {
        "GBP": 0.5151,
        "USD": 0.6571,
        "EUR": 0.5965,
        "AUD": 1.0000,
        "PKR": 185.2600
    },
    "PKR": {
        "GBP": 0.0027,
        "USD": 0.0036,
        "EUR": 0.0032,
        "AUD": 0.0054,
        "PKR": 1.0000
    }
}

async function startLoop() {
    let again;
    do{
        await convertAmount();
        again = await inquirer.prompt([
            {
                type: "list",
                name: "cont",
                choices: ["Yes", "No"],
                message: "Do you want to continue: "
            }
        ]);
    }while(again.cont=="Yes");
}

startLoop();

async function convertAmount(){
    const answer: {
        from: "GBP" | "USD" | "EUR" | "AUD" | "PKR",
        to: "GBP" | "USD" | "EUR" | "AUD" | "PKR",
        amount: number
    } = await inquirer.prompt([
        {
            type: "list",
            name: "from",
            choices: ["GBP", "USD", "EUR", "AUD", "PKR"],
            message: "Please select currency from: "
        },
        {
            type: "list",
            name: "to",
            choices: ["GBP", "USD", "EUR", "AUD", "PKR"],
            message: "Please select currency to: "
        },
        {
            type: "number",
            name: "amount",
            message: `Please enter amount to convert from to: `
        }
    ]);

    const {from, to, amount} = answer;
    if(from && to && amount) {
        let result = Converstion[from][to] * amount;
        console.log(`The converted amount of ${amount} ${from} in ${to} is ${result}`);
    } else {
        console.log(`Invalid input.`);
    }
}
