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

  it('should return the age of a person in Mercury years by inputted birthdate', function() {
    let newBirthdate = new Birthdate("1980-08-08");
    expect(newBirthdate.mercuryConvert()).toEqual(9.12);
  });

  // it('should return the age of a person in Venus years by inputted birthdate', function() {
  //   let newBirthdate = new Birthdate("1980-08-08");
  //   expect(newBirthdate.venusConvert()).toEqual(23.56);
  // });
  //
  // it('should return the age of a person in Mars years by inputted birthdate', function() {
  //   let newBirthdate = new Birthdate("1980-08-08");
  //   expect(newBirthdate.marsConvert()).toEqual(71.44);
  // });
  //
  // it('should return the age of a person in Jupiter years by inputted birthdate', function() {
  //   let newBirthdate = new Birthdate("1980-08-08");
  //   expect(newBirthdate.jupiterConvert()).toEqual(450.68);
  // });

  it('should return the average number of years a person can expect to live for by inputted birthdate', function() {
    let newBirthdate = new Birthdate("1980-08-08");
    expect(newBirthdate.lifeExpectancy()).toEqual(40.7);
  });

  it('should return the average number of years a person has lived past USA average life expectancy by inputted birthdate', function() {
    let newBirthdate = new Birthdate("1940-08-08");
    expect(newBirthdate.yearsLeft()).toEqual(0.7);
  });

});

import { Birthdate } from './../src/birthdate.js';
