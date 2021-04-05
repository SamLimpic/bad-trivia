import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"

export default class Question {
    constructor({ question, correct_answer, incorrect_answers }, id = generateId()) {
        this.question = question
        this.correct = correct_answer
        this.incorrect = incorrect_answers[0]
        this.id = id
    }

    get Template() {
        let qNum = ProxyState.questions.findIndex(q => q.question == this.question) + 1
        return /*html*/`
        <div id="${this.id}" class="col-md-3 card shadow text-center p-3 m-3">
        <h3><u>QUESTION ${qNum}</u></h3>
            <div class="row flex-grow-1 align-items-center">
                <div class="col">
                    <h5> ${this.question} </h5>
                </div>
            </div>
            <div class="row justify-content-center align-items-end pt-2 pb-1 px-md-5">
                <div class="col-6">
                    <button class="bg-success shadow rounded-lg pb-1"
                        onclick="app.questionsController.answer('${this.id}', 'False')"><big><strong>TRUE</strong></big></button>
                </div>
                <div class="col-6">
                    <button class="bg-danger shadow rounded-lg pb-1"
                        onclick="app.questionsController.answer('${this.id}', 'True')"><big><strong>FALSE</strong></big></button>
                </div>
            </div>
        </div>
        `
    }
}
