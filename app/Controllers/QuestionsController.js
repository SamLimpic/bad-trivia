import { ProxyState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";


//Private
function _draw() {
  let questions = ProxyState.questions
  let template = ''

  questions.forEach(question => template += question.Template)
  document.getElementById("trivia").innerHTML = template
}

//Public
export default class QuestionsController {
  constructor() {
    ProxyState.on("questions", _draw);

    questionsService.getAllQuestions()
  }

  answer(id, str) {
    questionsService.answer(id, str)
  }
}
