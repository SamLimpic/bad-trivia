import { ProxyState } from "../AppState.js";
import Question from "../Models/Question.js";
import { api } from "./AxiosService.js";

class QuestionsService {
  async getAllQuestions(url) {

    let res = await api.get(url)
    ProxyState.questions = res.data.results.map(data => new Question(data))
  }

  answer(id, str) {
    let thisQuestion = ProxyState.questions.find(q => q.id == id)
    if (thisQuestion.correct == str) {
      document.getElementById(id).classList.add('bg-success')
      document.getElementById(id).innerHTML = /*html*/`
      <div class="row align-items-center flex-grow-1 py-1">
        <div class="col">
          <h3><u> Correct! </u></h3>
          <h4> That seems right to me </h4>
          <h5> Who needs that fancy book learnin? </h5>
          <h4 class="pt-2"> Not you! </h4>
        </div>
      </div>
      `
    } else {
      document.getElementById(id).classList.add('bg-danger')
      document.getElementById(id).innerHTML = /*html*/`
      <div class="row align-items-center flex-grow-1 py-1">
        <div class="col">
          <h3><u> Wrong! </u></h3>
          <h4> That doesn't look right </h4>
          <h5> How much did that fancy school cost? </h5>
          <h4 class="pt-2"> Smarty pants! </h4>
        </div>
      </div>
      `
    }
  }
}

export const questionsService = new QuestionsService();

