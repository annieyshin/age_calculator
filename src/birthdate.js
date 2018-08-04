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

  mercuryConvert() {
    let today = new Date();
    let dob = new Date(this.birthdate);
    let ageInYears = today.getFullYear() - dob.getFullYear();
    let marsAge = ageInYears * .24;
    return marsAge;
  }

  venusConvert() {
    let today = new Date();
    let dob = new Date(this.birthdate);
    let ageInYears = today.getFullYear() - dob.getFullYear();
    let venusAge = ageInYears * .62;
    return venusAge;
  }

  marsConvert() {
    let today = new Date();
    let dob = new Date(this.birthdate);
    let ageInYears = today.getFullYear() - dob.getFullYear();
    let marsAge = ageInYears * 1.88;
    return marsAge;
  }

  jupiterConvert() {
    let today = new Date();
    let dob = new Date(this.birthdate);
    let ageInYears = today.getFullYear() - dob.getFullYear();
    let jupiterAge = ageInYears * 11.86;
    return jupiterAge;
  }

}

export { Birthdate };
