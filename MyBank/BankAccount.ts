import { IBankAccount } from "./IBankAccount.js";

export class BankAccount implements IBankAccount{
    
    private accountBalance:number;

    constructor() {
        this.accountBalance = 100;
    }

    public getAccountBalance(): number {
        return this.accountBalance;
    }

    public setAccountBalance(accountBalance: number) {
        this.accountBalance = accountBalance;
    }

    public debit(amount: number): string {
        let message: string = "You have insuficiant balance.";
        if(amount>0) {
            if(this.accountBalance>amount) {
                this.accountBalance = this.accountBalance-amount;
                message = "Transaction successful";
            }
        }else{
            message = "You have entered wrong ammount";
        }
        return message;
    }

    public credit(amount: number): string {
        let message: string = "Transaction failed.";
        if(amount>0) {
            this.accountBalance = this.accountBalance+amount;
            if(amount>100){
                this.accountBalance--;
            }
            message = "Transaction successful";
        }else{
            message = "You have entered wrong ammount";
        }
        return message;
    }
}