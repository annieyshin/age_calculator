import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Birthdate } from './birthdate.js';


$(document).ready(function() {
  $('form#age-form').submit(function(event) {
    event.preventDefault();
    let dob = new Date($('#birthdate').val());
    let result = Birthdate.ageYearConvert(dob);
    $('#solution').text(result);
  });
});
