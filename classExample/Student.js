class Student {
  constructor(firstName, lastName, year){
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
    this.absent  =0;
  }

  fullName(){
    return `${this.firstName} ${this.lastName}`;
  };

  markAbsent(){
   this.absent++;
    return `${this.fullName()} is absent ${this.absent} times`;
  }
  
  static printStudentName(student1, student2){
    
    console.log(`Student 1 name is ${student1.fullName()}`);
    console.log(`Student 2 name is ${student2.fullName()}`);
    
  }
}

let firstStudent = new Student('Siddhartha', 'Narang', '2016');
let secondStudent = new Student('Anmol', 'Narang', '2016');

console.log(`Type Of firstStudent is `,  typeof firstStudent);
console.log(`Class Of firstStudent is `,  firstStudent.constructor.name);


console.log(`First Student Name is ${firstStudent.firstName} ${firstStudent.lastName} of year ${firstStudent.year}`);

firstStudent.year = 2018;

console.log(`First Student Name is ${firstStudent.firstName} ${firstStudent.lastName} of year ${firstStudent.year}`);

console.log(firstStudent.markAbsent());
console.log(firstStudent.markAbsent());

Student.printStudentName(firstStudent, secondStudent);
