export class Person {
    persnality;
    constructor() {
        this.persnality = "Mystery";
    }
    askQuestion(answer) {
        if (answer == 1) {
            this.persnality = "Extravert";
        }
        else if (answer == 2) {
            this.persnality = "Introvert";
        }
        else {
            this.persnality = "You are still a mystery";
        }
    }
    getPersnality() {
        return this.persnality;
    }
}
