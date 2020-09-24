class Student {
  constructor(firstName, lastName, year){
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
  }
}

let firstStudent = new Student('Siddhartha', 'Narang', '2016');

console.log(`Type Of firstStudent is `,  typeof firstStudent);
console.log(`Class Of firstStudent is `,  firstStudent.constructor.name);


console.log(`First Student Name is ${firstStudent.firstName} ${firstStudent.lastName} of year ${firstStudent.year}`);

firstStudent.year = 2018;

console.log(`First Student Name is ${firstStudent.firstName} ${firstStudent.lastName} of year ${firstStudent.year}`);
