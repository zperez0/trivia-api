import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Trivia from './trivia.js';


function getElements(response) {
  if(response.main) {
    $('.showQuestion').show(`${response}`);
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
    console.log(response);
  }
}

$(document).ready(function() {
  $('#triviaButton').click(function() {
    Trivia.getTrivia()
      .then(function(response) {
        getElements(response);
    });
  });
});