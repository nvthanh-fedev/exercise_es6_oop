export class Person {
  constructor(name, address, id, email) {
    this.name = name;
    this.address = address;
    this.id = id;
    this.email = email;
  }

  get id() {
    // getter method to retrieve id value
    return this._id;
  }

  set id(value) {
    // setter method to set unique id
    if (value && typeof value === "string") {
      this._id = value;
    } else {
      throw Error("ID must be a unique string");
    }
  }
}
