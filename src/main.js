import {Actor} from './moviedb.js';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {

  $('#search').click(function() {
    event.preventDefault();
    let person = $('#person').val();
    let personAPI = new Actor(person);
    let promise = personAPI.searchActor();
    $('.showFilms').empty();
    // function output

  });

});
