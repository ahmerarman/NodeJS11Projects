import { Person } from "./Person.js";
export class Student extends Person {
    name1;
    constructor() {
        super();
        this.name1 = "";
    }
    getName() {
        return this.name1;
    }
    setName(name1) {
        this.name1 = name1;
    }
}
