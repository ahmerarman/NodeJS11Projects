export interface IBankAccount {
    debit(ammount: number): string;
    credit(amount: number): string;
}