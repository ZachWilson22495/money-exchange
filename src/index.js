import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './project';



function doTheMath(body, userInput, transferRate) {
  let answer = userInput * body.conversion_rates[transferRate];
  return answer;
}

$("#form").submit(function(event) {
  event.preventDefault();
  let promise = CurrencyExchange.getPaid();
  promise.then(function(response) {
    let body = JSON.parse(response);
    let userInput = $("#start").val();
    let transferRate = $("#transfer").val();
    let answer = doTheMath(body, userInput, transferRate);
    showAnswer(answer);
  });
});

function showAnswer(answer) {
  $("#output").text(answer);
}
