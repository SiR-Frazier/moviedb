import $ from 'jquery';

export class Actor {

  constructor(person) {
    this.person = person;
  }

// nested 2 get commands
  searchActor() {
    let person = $('#person').val();
    for(let i = 0; i < this.person.length; i++) {
      let person = this.person.replace(" ", "+")
    }
    $.get(`https://api.themoviedb.org/3/search/person?api_key=${process.env.API_KEY}&query=${person}`)
    .then ( (response) => {
      let personID = response.results[0].id;
      $.get(`https://api.themoviedb.org/3/person/${response.results[0].id}/movie_credits?api_key=${process.env.API_KEY}&language=en-US`)
      .then(function(response) {
        // console.log(response);
        let oneFilm = response.cast[0].original_title;
        console.log(oneFilm);
        $('.showFilms').text(`Here is  ${person}'s' ID number: ${personID}`);
      }).fail(function(error) {
        $('.showErrors').text(`There was an error processing your request: Please try again.`);
      });
    }).fail(function(error) {
      $('.showErrors').text(`There was an error processing your request: Please try again.`);
    });
  }

  showFilmsLoop() {

  }
}
