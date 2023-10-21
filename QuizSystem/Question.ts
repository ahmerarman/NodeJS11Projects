export class Question {

    private question: string = "";
    private options: string[] = [];
    private answer: string = "";

    constructor(question?: string, options?: string[], answer?: string) {
        if(question && options && answer) {
            this.question = question;
            this.options = options;
            this.answer = answer;
        }
    }

    setQuestion(question: string): void {
        this.question = question;
    }

    setOptions(options: string[]): void {
        this.options = options;
    }

    setAnswer(answer: string): void {
        this.answer = answer;
    }

    getQuestion(): string {
        return this.question;
    }

    getOptions(): string[] {
        return this.options;
    }

    getAnswer(): string {
        return this.answer;
    }

    checkQuestion(question: string): boolean {
        return (this.question === question);
    }

    checkOptions(option: string): boolean {
        let a: boolean = false;
        for(let i=0; i<this.options.length; i++) {
            if(this.options[i]===option) {
                a = true;
                break;
            }
        }
        return a;
    }

    checkAnswer(answer: string): boolean {
        return (this.answer === answer);
    }
}