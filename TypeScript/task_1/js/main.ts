// Define the Teacher interface
interface Teacher {
  readonly firstName: string; // Read-only, can only be set during initialization
  readonly lastName: string;  // Read-only, can only be set during initialization
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // Optional property
  location: string;
  [propName: string]: any;    // Allows additional properties
}

// Example usage
const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false, // Additional property
};

console.log(teacher3);

// Define the Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number; // New property specific to Directors
}

// Example usage
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

// Define the printTeacherFunction interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the printTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};

// Define the constructor interface
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Define the class interface
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Implement the StudentClass
class StudentClass implements StudentClassInterface {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}
// Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe

console.log(director1);