import { Person } from "./Person.js";

export class Student extends Person {

    private name1: string;

    constructor() {
        super();
        this.name1 = "";
    }

    public getName(): string {
        return this.name1;
    }

    public setName(name1: string): void {
        this.name1 = name1;
    }
}