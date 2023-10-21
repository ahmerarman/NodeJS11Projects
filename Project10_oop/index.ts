#!/usr/bin/env node
import inquirer from "inquirer";
import { Person } from "./Person.js";
import { Student } from "./Student.js";

let input;
let person: Person = new Person();
let student: Student = new Student();
let loop: boolean = false;

async function startLoop() {
    do {
        await getUserInput();
    }while(loop);
}

async function getUserInput() {
    try{
        input = await inquirer.prompt([
            {
                type: "number",
                name: "ans",
                message: "Type 1 if you like to talk to others, and type 2 if you would rather keep to your self: "
            },
            {
                type: "input",
                name: "name",
                message: "What is your name: "
            }
        ]);
        person.askQuestion(input.ans);
        console.log(`You are ${person.getPersnality()}`);

        student.setName(input.name);
        console.log(`Your name is ${student.getName()} and your personality type is ${student.getPersnality()}`);
        loop = false;
    }catch(err) {
        console.log(`Please enter a valid number.`);
        loop = true;
    }
}

startLoop();
