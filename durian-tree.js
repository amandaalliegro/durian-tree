class Employee {
  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.boss = null;
    this.subordinates = [];
  }
  addSubordinate(subordinate) {
    this.subordinates.push(subordinate);
    subordinate.boss = this;
  }
  get numberOfSubordinates() {
    return this.subordinates.length;
  }
  get numberOfPeopleToCEO() {
    let numberOfPeople = 0;
    let currentEmployee = this;

    // climb "up" the tree (using iteration), counting nodes, until no boss is found
    while (currentEmployee.boss) {
      currentEmployee = currentEmployee.boss;
      numberOfPeople++;
    }

    return numberOfPeople;
  }
hasSameBoss(employee) {
  return this.boss === employee.boss;
}
}

//----> adding nodes/ employees to the tree
const ada = new Employee("Ada", "CEO", 3000000.00);

const craig = new Employee("Craig", "VP Software", 1000000);

const simone = new Employee("Simone");

const ali = new Employee("Ali");

const arvinder = new Employee("Arvinder", "Chief Design Officer", 1000000);

const angela = new Employee("Angela", "VP Retail", 1000000);

const karla = new Employee("Karla");

const phil = new Employee("Phil", "VP Marketing", 1000000);

const florida = new Employee("Florida");

const david = new Employee("David");

const brian = new Employee("Brian");

//---> adding subordinates
ada.addSubordinate(craig);
ada.addSubordinate(arvinder);
ada.addSubordinate(angela);
ada.addSubordinate(phil);
craig.addSubordinate(simone);
craig.addSubordinate(ali);
angela.addSubordinate(karla);
phil.addSubordinate(florida);
phil.addSubordinate(david);
phil.addSubordinate(brian);


// Who is someone's boss?
//employee.boss
console.log(craig.boss);

// What's the total number of people that someone supervises?
//numberOfSubordinates();
console.log(craig.numberOfSubordinates);

// How many people there are between an employee and the CEO?
//numberOfPeopleToCEO();
console.log(craig.numberOfPeopleToCEO);

// Do two employees share the same boss?
//hasSameBoss(employee);
