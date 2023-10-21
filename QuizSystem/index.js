#!/usr/bin/env node
import inquirer from "inquirer";
import { Question } from "./Question.js";
let questions = [];
let result = 0;
function setQuestions() {
    for (let i = 1; i <= 10; i++) {
        let options = [`${i * 10}`, `${i * 20}`, `${i * 30}`, `${i * 40}`];
        questions.push(new Question(`What is ${i} x ${10}? `, options, `${i * 10}`));
    }
}
async function getUserOption(qs) {
    const answer = await inquirer.prompt([
        {
            type: "list",
            name: "ans",
            choices: qs.getOptions(),
            message: qs.getQuestion()
        }
    ]);
    if (qs.checkAnswer(answer.ans)) {
        result++;
    }
}
async function startLoop() {
    for (let i = 0; i < questions.length; i++) {
        await getUserOption(questions[i]);
    }
    console.log(`Your result is ${result} out of ${questions.length}, and your percentage is ${Math.round((result / questions.length) * 100)}%`);
}
setQuestions();
await startLoop();
