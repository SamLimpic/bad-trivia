export default class Question {
    constructor({ question, correct_answer, incorrect_answers }) {
        this.question = question
        this.correct = incorrect_answers[0]
        this.incorrect = correct_answer
    }

    get Template() {

        return /*html*/`

        `
    }
}
