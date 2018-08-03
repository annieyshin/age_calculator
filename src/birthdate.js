class Birthdate {
  constructor(birthdate) {
    this.birthdate = birthdate;
  }

  ageConverter() {
    let minutes = 1000 * 60;
    let hours = minutes * 60;
    let days = hours * 24;
    let years = days * 365;

    let date = new Date();
    let endDate = date.getTime();
    let ageCalculation = Math.round(endDate / years);
    return ageCalculation;

  }



}

export { Birthdate };
