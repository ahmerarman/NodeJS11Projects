import { BankAccount } from "./BankAccount.js";
export class Customer {
    firstName;
    lastName;
    gender;
    age;
    mobileNumber;
    bankAccount;
    constructor() {
        this.firstName = "";
        this.lastName = "";
        this.gender = "Male";
        this.age = 0;
        this.mobileNumber = "";
        this.bankAccount = new BankAccount;
    }
    getFirstName() {
        return this.firstName;
    }
    setFirstName(firstName) {
        this.firstName = firstName;
    }
    getLastName() {
        return this.lastName;
    }
    setLastName(lastName) {
        this.lastName = lastName;
    }
    getGender() {
        return this.gender;
    }
    setGender(gender) {
        this.gender = gender;
    }
    getAge() {
        return this.age;
    }
    setAge(age) {
        this.age = age;
    }
    getMobileNumber() {
        return this.mobileNumber;
    }
    setMobileNumber(mobileNumber) {
        this.mobileNumber = mobileNumber;
    }
    getBankAccount() {
        return this.bankAccount;
    }
    setBankAccount(bankAccount) {
        this.bankAccount = bankAccount;
    }
    customerInfo() {
        return `Name: ${this.firstName} ${this.lastName}
        Gender: ${this.gender}
        Age: ${this.age}
        Mobile Number: ${this.mobileNumber}
        Bank Account Balance ${this.bankAccount.getAccountBalance()}`;
    }
}
