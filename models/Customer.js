import { Person } from "./Person";

export class Customer extends Person {
  constructor(name, address, id, email, companyName, orderValue, rating) {
    super(name, address, id, email);
    this.companyName = companyName;
    this.orderValue = orderValue;
    this.rating = rating;
  }
}
