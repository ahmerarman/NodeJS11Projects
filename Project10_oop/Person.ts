export class Person {
    private persnality: string;

    constructor() {
        this.persnality = "Mystery";
    }

    public askQuestion(answer: number) {
        if(answer == 1) {
            this.persnality = "Extravert";
        }
        else if(answer == 2){
            this.persnality = "Introvert";
        }
        else {
            this.persnality = "You are still a mystery";
        }
    }

    public getPersnality(): string {
        return this.persnality;
    }
}