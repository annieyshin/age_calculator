import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Birthdate } from './birthdate.js';


$(document).ready(function() {
  $('#age-form').submit(function(event) {
    event.preventDefault();
    let dob = $('#birthdate');
    console.log(dob);
    let output = ageYearConvert(dob);
    output.forEach(function(element) {
      $('#solution').show();
    });
  });
});
