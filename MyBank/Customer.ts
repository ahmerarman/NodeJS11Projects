import { BankAccount } from "./BankAccount.js";

export class Customer {
    private firstName: string;
    private lastName: string;
    private gender: "Male"|"Female";
    private age: number;
    private mobileNumber: string;
    private bankAccount: BankAccount;

    constructor() {
        this.firstName = "";
        this.lastName = "";
        this.gender = "Male";
        this.age = 0;
        this.mobileNumber = "";
        this.bankAccount = new BankAccount;
    }

    public getFirstName(): string {
        return this.firstName;
    }

    public setFirstName(firstName: string) {
        this.firstName = firstName;
    }

    public getLastName(): string {
        return this.lastName;
    }

    public setLastName(lastName: string) {
        this.lastName = lastName;
    }

    public getGender(): "Male"|"Female" {
        return this.gender;
    }

    public setGender(gender: "Male"|"Female") {
        this.gender = gender;
    }

    public getAge(): number {
        return this.age;
    }

    public setAge(age: number) {
        this.age = age;
    }

    public getMobileNumber(): string {
        return this.mobileNumber;
    }

    public setMobileNumber(mobileNumber: string) {
        this.mobileNumber = mobileNumber;
    }

    public getBankAccount(): BankAccount {
        return this.bankAccount;
    }

    public setBankAccount(bankAccount: BankAccount) {
        this.bankAccount = bankAccount;
    }

    public customerInfo(): string {
        return `Name: ${this.firstName} ${this.lastName}
        Gender: ${this.gender}
        Age: ${this.age}
        Mobile Number: ${this.mobileNumber}
        Bank Account Balance ${this.bankAccount.getAccountBalance()}`
    }
}