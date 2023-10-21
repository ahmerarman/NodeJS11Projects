#!/usr/bin/env node
import inquirer from "inquirer";
import random from "random";
//import seedrandom from "seedrandom";

async function main() {
    //let rand = new Random(seedrandom());

    //Game variables
    let enmies: string[] = ["Skeleton", "Zombie", "Warrior", "Assassin"];
    let maxEnemyHealth = 75;
    let enemyAttackDamage = 25;

    //Player variables
    let health = 100;
    let attackDamage = 50;
    let numHealthPotions = 3;
    let healthPotionHealAmount = 30;
    let healthPotionDropChance = 50;

    let running = true;

    console.log(`Welcome to the Dungeon!`);

    GAME:
    while(running) {
        console.log(`------------------------------------------------`);
        let enimyHealth = random.integer(0, maxEnemyHealth);
        let enemy = enmies[random.integer(0, (enmies.length-1))];

        console.log(`\t# ${enemy} has appeared! #\n`);

        if(health > 1) {
            while(enimyHealth>0){
                console.log(`\tYour HP ${health}`);
                console.log(`\t${enemy}'s HP: ${enimyHealth}`);
                let menuItem: string[] = ["1. Attack", "2. Dronk Health Potion", "3. Run!", "4. Exit Dungeon"];
                let input = await getUserInput(menuItem);
                switch(input) {
                    case "1. Attack": {
                        let damageDealt = random.integer(0, attackDamage);
                        let damageTaken = random.integer(0, enemyAttackDamage);
                        enimyHealth -=damageDealt;
                        health -=damageTaken;
                        console.log(`\t> You strike the ${enemy} for ${damageDealt} damage.`);
                        console.log(`\t> you receive ${damageTaken} in retaliation.`);
                        if(health< 1) {
                            console.log(`\t> You have taken too much damage, you are too weak to go on!`);
                        }
                        break;
                    }
                    case "2. Dronk Health Potion": {
                        if(numHealthPotions > 0) {
                            health += healthPotionHealAmount;
                            numHealthPotions--;
                            console.log(`\t> You drink a health potion healing yourself for ${healthPotionHealAmount}.
                                            \t> You now have ${health} HP.
                                            \t> You have ${numHealthPotions} left.\n`);
                        }else {
                            console.log(`\t> You have no health potions left!. Defeat enemies for a chance to get one.`);
                        }
                        break;
                    }
                    case "3. Run!": {
                        console.log(`\t> You run away from ${enemy}!`);
                        continue GAME;
                    }
                    default: {
                        running = false;
                        continue GAME;
                    }
                }
            }
        }else{
            running = false;
            console.log(`\t> You limp out of the Dungeon!, weak from health.`);
            continue GAME;
        }
        console.log(`------------------------------------------------`);
        console.log(` # ${enemy} was defeated! #`);
        console.log(` # You have ${health} HP left. #`);
        if(random.integer(0, 100) < healthPotionDropChance) {
            numHealthPotions++;
            console.log(` # The ${enemy} dropped a health potion.`);
            console.log(` # You now have ${numHealthPotions} health potion(s). #`);
        }
        let menuItem: string[] = ["1. Constinue Fighting", "2. Exit Dungeon"];
        let input = await getUserInput(menuItem);
        switch(input) {
            case "1. Constinue Fighting": {
                continue GAME;
            }
            default: {
                running = false;
                continue GAME;
            }
        }
    }
    console.log(`#############################`);
    console.log(`#     Thanks for Palying    #`);
    console.log(`#############################`);
}

async function getUserInput(menuItem: string[]) {
    let answer = await inquirer.prompt([
        {
            type: "list",
            name: "usrin",
            choices: menuItem,
            message: "What would you like to do? "
        }
    ]);
    return answer.usrin;
}

main();