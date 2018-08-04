describe('Birthdate', function() {
  it('should return the age of a person in years by inputted birthdate', function() {
    let newBirthdate = new Birthdate("1990-08-08");
    expect(newBirthdate.ageConvert()).toEqual(28);
  });

  it('should return the age of a person in years by inputted birthdate', function() {
    let newBirthdate = new Birthdate("1980-08-08");
    expect(newBirthdate.ageConvert()).toEqual(38);
  });

});

import { Birthdate } from './../src/birthdate.js';
