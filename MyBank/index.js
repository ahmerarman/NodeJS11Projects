#!/usr/bin/env node
import inquirer from "inquirer";
import { Customer } from "./Customer.js";
let mainMenu, addCustomer, amount, accInfo;
let loop = true;
let customerList = [];
async function displayMainMenu() {
    mainMenu = await inquirer.prompt([
        {
            type: "list",
            name: "mainMenu",
            choices: ["Enter new Customer", "Deposit", "Withdrawl", "Account Information", "Exit"],
            message: "Please select any option: "
        }
    ]);
    switch (mainMenu.mainMenu) {
        case "Enter new Customer": {
            await addNewCustomer();
            break;
        }
        case "Deposit": {
            await depositAmount();
            break;
        }
        case "Withdrawl": {
            await withDrawAmount();
            break;
        }
        case "Account Information": {
            await getAccountInformation();
            break;
        }
        default: {
            loop = false;
            break;
        }
    }
}
async function addNewCustomer() {
    addCustomer = await inquirer.prompt([
        {
            type: "input",
            name: "firstName",
            message: "Enter First Name: "
        },
        {
            type: "input",
            name: "lastName",
            message: "Enter Last Name: "
        },
        {
            type: "list",
            name: "gneder",
            choices: ["Male", "Female"],
            message: "Select Gender: "
        },
        {
            type: "number",
            name: "age",
            message: "Enter Age: "
        },
        {
            type: "input",
            name: "mobileNumber",
            message: "Enter Mobile Number: "
        }
    ]);
    let customer = new Customer();
    customer.setFirstName(addCustomer.firstName);
    customer.setLastName(addCustomer.lastName);
    customer.setGender(addCustomer.gneder);
    customer.setAge(addCustomer.age);
    customer.setMobileNumber(addCustomer.mobileNumber);
    customerList.push(customer);
    console.log("New customer created: " + customer.customerInfo());
    await displayMainMenu();
}
async function depositAmount() {
    if (customerList.length > 0) {
        let customers = [];
        for (let i = 0; i < customerList.length; i++) {
            customers.push(customerList[i].getFirstName());
        }
        customers.push("Main Menu");
        customers.push("Exit");
        amount = await inquirer.prompt([
            {
                type: "list",
                name: "cusList",
                choices: customers,
                message: "Please select your option: "
            },
            {
                type: "number",
                name: "amm",
                message: "Enter Amount: "
            }
        ]);
        switch (amount.cusList) {
            case "Main Menu": {
                await displayMainMenu();
                break;
            }
            case "Exit": {
                loop = false;
                break;
            }
            default: {
                let cust;
                for (let i = 0; i < customerList.length; i++) {
                    if (customerList[i].getFirstName() === amount.cusList) {
                        cust = customerList[i];
                        console.log(cust.getBankAccount().credit(amount.amm));
                        break;
                    }
                }
                await displayMainMenu();
            }
        }
    }
    else {
        console.log("No customer exist.");
        await displayMainMenu();
    }
}
async function withDrawAmount() {
    if (customerList.length > 0) {
        let customers = [];
        for (let i = 0; i < customerList.length; i++) {
            customers.push(customerList[i].getFirstName());
        }
        customers.push("Main Menu");
        customers.push("Exit");
        amount = await inquirer.prompt([
            {
                type: "list",
                name: "cusList",
                choices: customers,
                message: "Please select your option: "
            },
            {
                type: "number",
                name: "amm",
                message: "Enter Amount: "
            }
        ]);
        switch (amount.cusList) {
            case "Main Menu": {
                await displayMainMenu();
                break;
            }
            case "Exit": {
                loop = false;
                break;
            }
            default: {
                let cust;
                for (let i = 0; i < customerList.length; i++) {
                    if (customerList[i].getFirstName() === amount.cusList) {
                        cust = customerList[i];
                        console.log(cust.getBankAccount().debit(amount.amm));
                        break;
                    }
                }
                await displayMainMenu();
            }
        }
    }
    else {
        console.log("No customer exist.");
        await displayMainMenu();
    }
}
async function getAccountInformation() {
    if (customerList.length > 0) {
        let customers = [];
        for (let i = 0; i < customerList.length; i++) {
            customers.push(customerList[i].getFirstName());
        }
        customers.push("Main Menu");
        customers.push("Exit");
        accInfo = await inquirer.prompt([
            {
                type: "list",
                name: "cusList",
                choices: customers,
                message: "Please select your option: "
            },
        ]);
        switch (accInfo.cusList) {
            case "Main Menu": {
                await displayMainMenu();
                break;
            }
            case "Exit": {
                loop = false;
                break;
            }
            default: {
                let cust;
                for (let i = 0; i < customerList.length; i++) {
                    if (customerList[i].getFirstName() === accInfo.cusList) {
                        cust = customerList[i];
                        console.log(cust.customerInfo());
                        break;
                    }
                }
                await displayMainMenu();
            }
        }
    }
    else {
        console.log("No customer exist.");
        await displayMainMenu();
    }
}
async function startLoop() {
    do {
        await displayMainMenu();
    } while (loop);
}
startLoop();
