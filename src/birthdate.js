class Birthdate {
  constructor(birthdate) {
    this.birthdate = birthdate;
  }

  ageConvert() {
    let startdate = new Date(birthdate);
    let endDate = Date.now();
    let ageCalculation = endDate - startdate;
    return ageCalculation;

  }



}

export { Birthdate };
