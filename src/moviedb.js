// import $ from 'jquery';

export class Actor {
  constructor(person) {
    this.person = person;
  }

  searchActor() {
    let person = $('#person').val();
    for(let i = 0; i < this.person.length; i++) {
      let person = this.person.replace(" ", "+")}
    $.get(`https://api.themoviedb.org/3/search/person?api_key=${process.env.API_KEY}&query=${person}`).then(function(response) {
      $('.showFilms').text(`Here is  ${person}'s' ID number: ${response.results[0].id}`);
    }).fail(function(error) {
      $('.showErrors').text(`There was an error processing your request: Please try again.`);
    });
  }
}
