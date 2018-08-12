class Birthdate {
  constructor(birthdate) {
    this.birthdate = birthdate;
    this.planets = {
      mercury: .24,
      venus: .62,
      jupiter: 11.86,
      mars: 1.88
    }
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

  // mercuryConvert() {
  //   let today = new Date();
  //   let dob = new Date(this.birthdate);
  //   let ageInYears = today.getFullYear() - dob.getFullYear();
  //   let mercuryAge = ageInYears * .24;
  //   return +(Math.round(mercuryAge + "e+2")  + "e-2");
  // }
  //
  // venusConvert() {
  //   let today = new Date();
  //   let dob = new Date(this.birthdate);
  //   let ageInYears = today.getFullYear() - dob.getFullYear();
  //   let venusAge = ageInYears * .62;
  //   return +(Math.round(venusAge + "e+2")  + "e-2");
  // }

  // marsConvert() {
  //   let today = new Date();
  //   let dob = new Date(this.birthdate);
  //   let ageInYears = today.getFullYear() - dob.getFullYear();
  //   let marsAge = ageInYears * 1.88;
  //   return +(Math.round(marsAge + "e+2")  + "e-2");
  // }
  //
  // jupiterConvert() {
  //   let today = new Date();
  //   let dob = new Date(this.birthdate);
  //   let ageInYears = today.getFullYear() - dob.getFullYear();
  //   let jupiterAge = (ageInYears * 11.86).toFixed(2);
  //   return +(Math.round(jupiterAge + "e+2")  + "e-2");
  // }

  lifeExpectancy() {
    const averageLifeExpetancy = 78.7;
    let today = new Date();
    let dob = new Date(this.birthdate);
    let ageInYears = today.getFullYear() - dob.getFullYear();
    return averageLifeExpetancy - ageInYears;
  }

  yearsLeft() {
    const averageLifeExpetancy = 78.7;
    let today = new Date();
    let dob = new Date(this.birthdate);
    let ageInYears = today.getFullYear() - dob.getFullYear();
    let timeLeft =  -(ageInYears - averageLifeExpetancy);
    return +(Math.round(timeLeft + "e+2")  + "e-2");
  }

}

export { Birthdate };
