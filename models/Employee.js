import { Person } from "./Person";

export class Employee extends Person {
  constructor(name, address, id, email, workingDays, dailySalary) {
    super(name, address, id, email);
    this.workingDays = workingDays;
    this.dailySalary = dailySalary;
  }

  get salary() {
    return this.workingDays * this.dailySalary;
  }
}
