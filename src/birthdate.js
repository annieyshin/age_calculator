class Birthdate {
  constructor(birthdate) {
    this.birthdate = birthdate;
  }

  ageYearConvert() {
    let today = new Date();
    let dob = new Date(this.birthdate);
    let ageInYears = today.getFullYear() - dob.getFullYear();
    return ageInYears;

  }

  ageSecondsConvert() {
    let today = new Date();
    let dob = new Date(this.birthdate);
    let ageInYears = today.getFullYear() - dob.getFullYear();
    let ageInSeconds = ageInYears * 31556952
    return ageInSeconds;
  }
  
}

export { Birthdate };
