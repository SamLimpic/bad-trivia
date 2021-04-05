import { ProxyState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";


//Private
function _draw() {
  let questions = ProxyState.questions;
  let template = ''
  questions.forEach(v => template += v.Template)
  document.getElementById("app").innerHTML = /*html*/`

  `
}

//Public
export default class QuestionsController {
  constructor() {
    ProxyState.on("questions", _draw);
    _draw()
  }

}
