export class Question {
    question = "";
    options = [];
    answer = "";
    constructor(question, options, answer) {
        if (question && options && answer) {
            this.question = question;
            this.options = options;
            this.answer = answer;
        }
    }
    setQuestion(question) {
        this.question = question;
    }
    setOptions(options) {
        this.options = options;
    }
    setAnswer(answer) {
        this.answer = answer;
    }
    getQuestion() {
        return this.question;
    }
    getOptions() {
        return this.options;
    }
    getAnswer() {
        return this.answer;
    }
    checkQuestion(question) {
        return (this.question === question);
    }
    checkOptions(option) {
        let a = false;
        for (let i = 0; i < this.options.length; i++) {
            if (this.options[i] === option) {
                a = true;
                break;
            }
        }
        return a;
    }
    checkAnswer(answer) {
        return (this.answer === answer);
    }
}
