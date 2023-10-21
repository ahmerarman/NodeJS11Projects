export class BankAccount {
    accountBalance;
    constructor() {
        this.accountBalance = 100;
    }
    getAccountBalance() {
        return this.accountBalance;
    }
    setAccountBalance(accountBalance) {
        this.accountBalance = accountBalance;
    }
    debit(amount) {
        let message = "You have insuficiant balance.";
        if (amount > 0) {
            if (this.accountBalance > amount) {
                this.accountBalance = this.accountBalance - amount;
                message = "Transaction successful";
            }
        }
        else {
            message = "You have entered wrong ammount";
        }
        return message;
    }
    credit(amount) {
        let message = "Transaction failed.";
        if (amount > 0) {
            this.accountBalance = this.accountBalance + amount;
            if (amount > 100) {
                this.accountBalance--;
            }
            message = "Transaction successful";
        }
        else {
            message = "You have entered wrong ammount";
        }
        return message;
    }
}
