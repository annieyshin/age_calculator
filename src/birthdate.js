class Birthdate {
  constructor(birthdate) {
    this.birthdate = birthdate;
  }

  ageConvert() {
    let date = new Date();
    let endDate = date.getTime();
    let ageCalculation = Math.round(endDate / years);
    return ageCalculation;

  }



}

export { Birthdate };
