export class ListPerson {
  constructor() {
    this.persons = [];
  }

  addPerson = (person) => {
    if (person?.id && person?.name && person?.address && person?.email) {
      this.persons.push(person);
    } else {
      console.error("Invalid person object");
    }
  };

  removePerson = (id) => {
    this.persons = this.persons.filter((person) => person.id !== id);
  };

  updatePerson = (id, updatedPerson) => {
    const index = this.persons.findIndex((person) => person.id === id);
    if (index === -1) {
      console.error("Person not found");
    } else {
      this.persons[index] = updatedPerson;
    }
  };

  sortByFullName = () => {
    this.persons.sort((a, b) => {
      const nameA = a.name?.split(" ")?.pop();
      const nameB = b.name?.split(" ")?.pop();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
  };

  filterByType = (type) => {
    return this.persons.filter((person) => person instanceof type);
  };
}
