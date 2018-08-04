class Birthdate {
  constructor(birthdate) {
    this.birthdate = birthdate;
  }

  ageConvert() {
    let today = new Date();
    let dob = new Date(this.birthdate);
    let totalAge = today.getFullYear() - dob.getFullYear();
    return totalAge;
  }

}

export { Birthdate };
