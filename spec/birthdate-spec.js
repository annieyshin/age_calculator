import { Birthdate } from './../src/birthdate.js';

describe('Birthdate', function() {
  it('should return the age of a person in years by inputted birthdate', function() {
    let newBirthdate = new Birthdate("08/08/1990");
    expect(newBirthdate.ageConvert()).toEqual(27);
  });

});
