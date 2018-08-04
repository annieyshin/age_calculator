describe('Birthdate', function() {
  it('should return the age of a person in years by inputted birthdate', function() {
    let newBirthdate = new Birthdate("1990-08-08");
    expect(newBirthdate.ageYearConvert()).toEqual(28);
  });

  it('should return the age of a person in years by inputted birthdate', function() {
    let newBirthdate = new Birthdate("1980-08-08");
    expect(newBirthdate.ageYearConvert()).toEqual(38);
  });

  it('should return the age of a person in seconds by inputted birthdate', function() {
    let newBirthdate = new Birthdate("1990-08-08");
    expect(newBirthdate.ageSecondsConvert()).toEqual(883594656);
  });


});

import { Birthdate } from './../src/birthdate.js';
