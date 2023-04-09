import Person from "./Person";

export class Student extends Person {
  constructor(
    name,
    address,
    id,
    email,
    mathScore,
    physicsScore,
    chemistryScore
  ) {
    super(name, address, id, email);
    this.mathScore = mathScore;
    this.physicsScore = physicsScore;
    this.chemistryScore = chemistryScore;
  }

  static calculateAverageScore(mathScore, physicsScore, chemistryScore) {
    return (mathScore + physicsScore + chemistryScore) / 3;
  }

  get averageScore() {
    return Student.calculateAverageScore(
      this.mathScore,
      this.physicsScore,
      this.chemistryScore
    );
  }
}
