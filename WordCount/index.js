#!/usr/bin/env node
import inquirer from "inquirer";
async function startLoop() {
    do {
        await getSentence();
        var again = await inquirer.prompt([
            {
                type: "list",
                name: "loop",
                choices: ["Yes", "No"],
                message: "Do you want to continue: "
            }
        ]);
    } while (again.loop == "Yes");
}
startLoop();
function wordCount(sent) {
    if (sent.length > 0) {
        const words = sent.split(" ");
        console.log(words);
        return words.length;
    }
    else {
        return 0;
    }
}
async function getSentence() {
    const answer = await inquirer.prompt([
        {
            type: "input",
            name: "sentence",
            message: "Please write your sentence to count words: "
        }
    ]);
    console.log(`Word count in your sentence is ${wordCount(answer.sentence.trim())}`);
}
