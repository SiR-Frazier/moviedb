import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {

  $('#search').click(function() {
    let person = $('#person').val();
    let person2 = $('#person').val();
    for(let i = 0; i < person.length; i++) {
      person2 = person.replace(" ", "+");
    }
    console.log("person: " + person);
    console.log("person with +s: " + person2);
      $.get(`https://api.themoviedb.org/3/search/person?api_key=${process.env.API_KEY}&query=${person}`).then(function(response) {
        console.log(response);
      $('.showFilms').text(`Here is ` + person + ` ID number: ` + `${response.results[0].id}`);
    }).fail(function(error) {
      $('.showErrors').text(`There was an error processing your request: Please try again.`);
    });
    event.preventDefault();
  });

});
