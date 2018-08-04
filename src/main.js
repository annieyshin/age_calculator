import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Birthdate } from './birthdate.js';


$(document).ready(function() {
  $('#age-form').submit(function(event) {
    event.preventDefault();
    let birthdate = $('#birthdate');
    let output = ageYearConvert(birthdate);
    output.forEach(function(element) {
      $('#earthYears').append("<li>" + element + "</li>");
    });
  });
});
